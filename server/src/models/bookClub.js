const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookClubSchema = new Schema({
  name: String,
  genre: String,
  description: String,
  image: String,
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  members: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("BookClub", bookClubSchema);
