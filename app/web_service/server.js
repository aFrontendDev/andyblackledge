'use strict';

var express = require('express');
var bodyParser = require("body-parser");
var functions = require('../web_service/functions');
var app = express();
var crypto = require('crypto');

//  Middle-ware for handling post requests 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Hash with sha512
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return value;
};

// START *** Settings headers to allow cross domain requests
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// END *****


// START *** Express deals with urls
app.get('/getData', function (req, res) {
    functions.getData(res);
});

app.post('/saveData', function (req, res) {
    // authenticate password first
    var pass = req.body.pass;
 
    functions.getPassword().then(function(data) {
        var salt = data.salt;
        var systemPass = data.pass;
        var submittedPass = sha512(pass, salt);

        if (systemPass === submittedPass) {
            functions.saveData(req);
            res.sendStatus(200); 
        } else {
            console.log("nope - password doesn't match");
            res.status(500).send("nope - password doesn't match");
        }
    }).catch(function (err) {
        console.log("nope - problem getting info", err);
        res.status(500).send("nope - problem getting info", err);
    });
});

app.get('/test', function (req, res) {
    res.send('Testing');
    console.log(req.client.remoteAddress);
});

app.get('/entry', function (req, res) {
    res.sendfile('./html/blog-form.html');
});
// END *****


// START *** Use Express to listen to port
app.listen(4000, '127.0.0.1');
// END *****
