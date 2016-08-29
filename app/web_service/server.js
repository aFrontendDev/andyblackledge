var express = require('express');
var bodyParser = require("body-parser");
var functions = require('../web_service/functions');
var app = express();

//  Middle-ware for handling post requests 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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
    if (req.client.remoteAddress !== '127.0.0.1') {
        console.log('nope');
        res.status(500).send('nope');
        return;
    }
    functions.saveData(req);
});

app.get('/test', function (req, res) {
    res.send('Testing');
    console.log(req.client.remoteAddress);
});
// END *****


// START *** Use Express to listen to port
app.listen(4000, '127.0.0.1');
// END *****
