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

router.get('/user', contUser.getUsers)

router.post('/houses', contUser.createHouses)

router.delete('/houses/:id', control.delHouses)

router.put('/houses/:id', control.updateHouses)

module.exports = router;
