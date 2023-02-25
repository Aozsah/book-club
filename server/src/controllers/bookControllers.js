const jwt = require('jsonwebtoken');
const Book = require('../models/book');
exports.createBook = async (req, res) => {
  try {
    const { name, author, description, image } = req.body;
    const book = new Book({
      name,
      author,
      description,
      image,
    });
    const result = await book.save();
    res.status(201).send({ status: 'success', data: result });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: 'error', msg: err });
  }
};


function extractToken(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.USER_TOKEN_KEY);
    const userId = decodedToken.user_id;
    return userId ? userId : null;
  }
  return null;
}
