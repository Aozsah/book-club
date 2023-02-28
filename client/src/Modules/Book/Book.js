import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Book.css';

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [nextBookId, setNextBookId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/book/${id}`)
      .then(response => {
        setBook(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (!book._id) {
      return;
    }

    axios.get(`http://localhost:3001/book/next/${book._id}`)
      .then(response => {
        setNextBookId(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [book]);

  const handleNextClick = () => {
    window.location.href = `/book/${nextBookId}`;
  };

  return (
    <div className="book-container">
      <h2>Book Details</h2>
      {book._id && (
        <div>
          <img className="book-cover" src={book.image} alt="Book Cover" />
          <div className="book-details">
            <p className="book-author">Author: {book.author}</p>
            <p className="book-name">Name: {book.name}</p>
            <p className="book-description">Description: {book.description}</p>
            {nextBookId && (
              <button onClick={handleNextClick}>Next</button>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
