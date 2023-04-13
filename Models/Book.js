var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Books = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 255,
  },
  author: {
    type: String,
    required: true,
    maxLength: 255,
  }
});

var Book = mongoose.model("Books", Books);
module.exports = Book;