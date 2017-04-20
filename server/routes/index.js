'use strict'
var express = require('express');
var router = express.Router();
var control = require('../controller/houseController');
var Articles = require('../models/article');
var  = require('../models/article');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// router.get('/houses', control.getHouses)
//
// router.get('/houses/:name', control.getOneHouse)
//
// router.post('/houses', control.createHouses)
//
// router.delete('/houses/:id', control.delHouses)
//
// router.put('/houses/:id', control.updateHouses)

module.exports = router;
