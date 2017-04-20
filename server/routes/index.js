'use strict'
var express = require('express');
var router = express.Router();
var contArticle = require('../controller/articleController');
var contUser = require('../controller/userController');
var Articles = require('../models/article');
var Users = require('../models/user');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/users', contUser.getUsers)

router.post('/users', contUser.createUsers)

router.delete('/users/:id', contUser.delUsers)

router.put('/users/:id', contUser.updateUsers)

router.get('/articles', contArticle.getArticles)

router.post('/articles', contArticle.createArticles)

router.delete('/articles/:id', contArticle.delArticles)

router.put('/articles/:id', contArticle.updateArticles)

module.exports = router;
