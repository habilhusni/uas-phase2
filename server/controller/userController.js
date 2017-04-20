'use strict'
var express = require('express');
var router = express.Router();
var Users = require('../models/user');

let getUsers = (req, res) => {

	Users.find(function (err, users) {
  		if (err) res.send(err);
  		res.send(users);
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

let createUsers = (req, res) => {
	let user = new Users(
		{
			name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
		});

	user.save(function (err) {
  	if (err) res.send(err);
	});

	res.send(user);

}

let delUsers = (req, res) => {

	// Houses.remove(
	// 	{
	// 		name: req.body.name
	// 	},
	// 	function(err) {
	// 		if(err) res.send(err);
	// 	}
	// );

	Users.findByIdAndRemove(req.params.id, (err, user) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(user)
		}
	})

}

let updateUsers = (req, res) => {

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

	Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
		if(err) {
			res.send(err.message)
		} else {
			res.send(user)
		}
	})

}

module.exports = {
	getUsers,
	createUsers,
	delUsers,
	updateUsers
}
