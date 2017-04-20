'use strict'
var express = require('express');
var router = express.Router();
var Houses = require('../models/house');

let getHouses = (req, res) => {

	Houses.find(function (err, houses) {
  		if (err) res.send(err);
  		res.send(houses);
	})

	// Foods.find({})
  //      .populate('available_at')
  //      .exec((err,results) => {
  //         if(err) {
  //           res.send(err.message)
  //         } else {
  //           res.send(results)
  //         }
  //       })

}

let getOneHouse = (req, res) => {

	Houses.findOne(
		{
			name: req.params.name
		},
		function (err, house) {
  		if (err) res.send(err);
  		res.send(house);
		})

}

let createHouses = (req, res) => {
	let house = new Houses(
		{
			name: req.body.name,
			description: req.body.description,
			address: req.body.address,
			price: req.body.price
		});

	house.save(function (err) {
  	if (err) res.send(err);
	});

	res.send(house);

}

let delHouses = (req, res) => {

	// Houses.remove(
	// 	{
	// 		name: req.body.name
	// 	},
	// 	function(err) {
	// 		if(err) res.send(err);
	// 	}
	// );

	Houses.findByIdAndRemove(req.params.id, (err, house) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(house)
		}
	})

	// res.send('House Removed!')
}

let updateHouses = (req, res) => {

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

	Houses.findByIdAndUpdate(req.params.id, req.body, (err, house) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(house)
		}
	})

}

module.exports = {
	getHouses,
	getOneHouse,
	createHouses,
	delHouses,
	updateHouses
}
