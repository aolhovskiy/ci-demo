// 'use strict'
const PORT = process.env.PORT || 9000;

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
app.use(cors());
 
// parse application/json 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('CI Demo!');
  console.log('get /');
});

app.all('*', (req, res, next) => {
  console.log('got request ', req.url, req.method, req.body);
  next();
});

app.listen(PORT, function () {
  console.log(`CI Demo app listening on port ${PORT}!`);
});