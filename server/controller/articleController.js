'use strict'
var express = require('express');
var router = express.Router();
var Articles = require('../models/article');

let getArticles = (req, res) => {

	// Articles.find(function (err, articles) {
  // 		if (err) res.send(err);
  // 		res.send(articles);
	// })

	Articles.find({})
       .populate('author')
       .exec((err,results) => {
          if(err) {
            res.send(err.message)
          } else {
            res.send(results)
          }
        })

}

let createArticles = (req, res) => {
	let article = new Articles(
		{
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      updatedAt: new Date(),
      createdAt: new Date()
		});

	article.save(function (err) {
  	if (err) res.send(err);
	});

	res.send(article);

}

let delArticles = (req, res) => {

	// Houses.remove(
	// 	{
	// 		name: req.body.name
	// 	},
	// 	function(err) {
	// 		if(err) res.send(err);
	// 	}
	// );

	Articles.findByIdAndRemove(req.params.id, (err, article) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(article)
		}
	})

}

let updateArticles = (req, res) => {

	// Houses.findOneAndUpdate(
	// 	{
	// 		name: req.body.oldName
	// 	},
	// 	{
	// 		name: req.body.name,
	// 		description: req.body.description,
	// 		address: req.body.address,
	// 		price: req.body.price
	// 	},
	// 	function(err) {
	// 		if(err) res.send(err);
	// 	}
	// );

	Articles.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(article)
		}
	})

}

module.exports = {
	getArticles,
	createArticles,
	delArticles,
	updateArticles
}
