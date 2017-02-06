'use strict';

var express = require('express');
var app = express();
var getListings = require('../web_service/get-listings');

// START *** Settings headers to allow cross domain requests
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// END *****


app.get('/getListings', function (req, res) {
    getListings.getListings(res);
    console.log(res);
});


// START *** Use Express to listen to port
app.listen(4000, '127.0.0.1');
// END *****