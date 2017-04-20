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
var Users = require('./models/user');
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
passport.use(new Strategy(
	function(username, password, cb) {
		Users.findOne({ username: username }, function(err, person) {
			if(err) res.send(err.message);

			if(person.username == username && person.password == password) {
				console.log(username);
				console.log(password);
				cb(null, person);
			}else {
				cb('USERNAME AND PASSWORD NOT MATCH!')
			}

		});

	}

))

app.use(passport.initialize());

app.use('/login', passport.authenticate('local', { session: false }), (req,res,next) => {
	var token = jwt.sign({username: req.body.username, password: req.body.password}, 'secret');
    res.send(token);
})

app.listen(3000);

module.exports = app;
