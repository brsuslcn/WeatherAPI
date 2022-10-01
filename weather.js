var http = require('http');
var express = require('express');
var ejslayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname,'public')));
app.use(ejslayouts);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/public/views'));

var controller = require('./controller.js');
app.use('/', controller);

app.listen(3000);
