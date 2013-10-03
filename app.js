var express = require('express');

var path = require('path');

var app = express();

app.configure(function(){
  'use strict';
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'dist')));
});

var port = process.env.PORT || 8080;

app.listen(port);

