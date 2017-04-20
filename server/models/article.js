var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = require('./user');

var articleSchema = new Schema({
  title: String,
  content: String,
  author: [{type: Schema.Types.ObjectId, ref:'User'}],
  updatedAt: Date,
  createdAt: Date
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
