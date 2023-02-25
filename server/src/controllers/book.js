const jwt = require("jsonwebtoken");
const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find({});
      console.log(books);
      res.status(200).send({ status: "success", data: books });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: "error", msg: err });
    }
};

exports.createBook = async (req, res) => {
    try {
        const book = new Book({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description,
            image: req.body.image
        });
        const savedBook = await book.save();
        res.status(201).send({ status: "success", data: savedBook });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        if (!book) {
            res.status(404).send({ status: "fail", msg: "Book not found." });
            return;
        }
        book.name = req.body.name || book.name;
        book.author = req.body.author || book.author;
        book.description = req.body.description || book.description;
        book.image = req.body.image || book.image;
        const updatedBook = await book.save();
        res.send({ status: "success", data: updatedBook });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(bookId);
        if (!deletedBook) {
            res.status(404).send({ status: "fail", msg: "Book not found." });
            return;
        }
        res.send({ status: "success", data: deletedBook });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

function extractToken(req) {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];

        const decodedToken = jwt.verify(token, process.env.USER_TOKEN_KEY);
        const userID = decodedToken.user_id;
        return userID ? userID : null;
    }
    return null;
}
