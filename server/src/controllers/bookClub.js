const jwt = require("jsonwebtoken");
const BookClub = require('../models/bookClub');

exports.getAllBookClubs = async (req, res) => {
    try {
      const bookClubs = await BookClub.find({});
      console.log(bookClubs);
      res.status(200).send({ status: "success", data: bookClubs });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: "error", msg: err });
    }
};

exports.createBookClub = async (req, res) => {
    try {
        const bookClub = new BookClub({
            name: req.body.name,
            genre: req.body.genre,
            books: req.body.books,
            members: req.body.members,
            image: req.body.image
        });
        const savedBookClub = await bookClub.save();
        res.status(201).send({ status: "success", data: savedBookClub });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

exports.getBookClubById = async (req, res) => {
    try {
        const bookClubId = req.params.id;
        const bookClub = await BookClub.findById(bookClubId);
        if (!bookClub) {
            res.status(404).send({ status: "fail", msg: "Book club not found." });
            return;
        }
        console.log(bookClub);
        res.send({ status: "success", data: bookClub });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

exports.updateBookClub = async (req, res) => {
    try {
        const bookClubId = req.params.id;
        const bookClub = await BookClub.findById(bookClubId);
        if (!bookClub) {
            res.status(404).send({ status: "fail", msg: "Book club not found." });
            return;
        }
        bookClub.name = req.body.name || bookClub.name;
        bookClub.books = req.body.books || bookClub.books;
        bookClub.members = req.body.members || bookClub.members;
        const updatedBookClub = await bookClub.save();
        console.log(updatedBookClub);
        res.send({ status: "success", data: updatedBookClub });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "error", msg: err });
    }
};

exports.deleteBookClub = async (req, res) => {
    try {
        const bookClubId = req.params.id;
        const deletedBookClub = await BookClub.findByIdAndDelete(bookClubId);
        if (!deletedBookClub) {
            res.status(404).send({ status: "fail", msg: "Book club not found." });
            return;
        }
        console.log(deletedBookClub);
        res.send({ status: "success", data: deletedBookClub });
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
