const express = require('express');
const router = express.Router();
const { addBook, getAllBooks } = require('../controllers/book');

router.get('/', getAllBooks);
router.post('/add', addBook);
const addBook = (req, res) => {
    const { name, author, description, image } = req.body;
    // burada yeni eklenen kitabın bilgileriyle bir nesne oluşturup bir değişkene atayabilirsiniz
    const newBook = {
      name,
      author,
      description,
      image
    }
    // yeni kitap bilgilerini JSON formatında döndürüyoruz
    res.status(200).json({
      status: 'success',
      message: 'Book added successfully',
      book: newBook
    });
  };
  


module.exports = router;
