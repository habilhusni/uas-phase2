'use strict'
var express = require('express');
var router = express.Router();
var contArticle = require('../controller/articleController');
var contUser = require('../controller/userController');
var Articles = require('../models/article');
var Users = require('../models/user');
var aut = require('../autentikasi/auths');

// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

router.get('/users', aut.authToken, contUser.getUsers)

router.post('/signup', contUser.createUsers)

router.delete('/users/:id', aut.authToken, contUser.delUsers)

router.put('/users/:id', aut.authToken, contUser.updateUsers)

router.get('/articles', aut.authToken, contArticle.getArticles)

router.post('/articles', aut.authToken, contArticle.createArticles)

router.delete('/articles/:id', aut.authToken, contArticle.delArticles)

router.put('/articles/:id', aut.authToken, contArticle.updateArticles)

module.exports = router;
