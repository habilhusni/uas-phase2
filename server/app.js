var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/live-code2');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var index = require('./routes/index');
app.use('/', index);

// app.use('/', (req, res, next) => {
// 	res.send('connect');
// })

app.listen(3000);

module.exports = app;
