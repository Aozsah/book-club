import React, { useState, useEffect } from 'react';
import './Book.css';

const Book = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data')
      .then(response => response.json())
      .then(data => {
        setBook(data['ISBN:0451526538']);
      });
  }, []);

  return (
    <div className="book-container">
      <h2>Book Details</h2>
      {book.authors && (
        <div>
          <img className="book-cover" src={book.cover.large} alt="Book Cover" />
          <div className="book-details">
            <p className="book-author">Author: {book.authors[0].name}</p>
            <p className="book-publish-date">Publication Date: {book.publish_date}</p>
            <p className="book-description">Description: {book.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
