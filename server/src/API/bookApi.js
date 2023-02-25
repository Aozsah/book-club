const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/books', async (req, res) => {
    try {
      const books = await Book.find({});
      res.status(200).send({ status: 'success', data: books });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'error', msg: err });
    }
  });
  

router.get('/book/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send({ status: 'success', data: book });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: 'error', msg: err });
  }
});

module.exports = router;
