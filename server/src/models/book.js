const mongoose = require("mongoose");
const book = new mongoose.Schema({
  name: String,
  author: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Book", book);