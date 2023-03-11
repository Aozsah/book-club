import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAdd.css';
import axios from 'axios';

function BookAdd() {
  const [coverUrl, setCoverUrl] = useState(null);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  function handleCoverChange(event) {
    const file = event.target.files[0];
    setCoverUrl(URL.createObjectURL(file));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const bookData = { name, author, description, cover: coverUrl };
    axios.post("http://localhost:3001/bookadd", bookData)
      .then(response => {
        console.log("Success:", response.data);
        navigate("/");
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <form className="book-add-form" onSubmit={handleSubmit}>
      <div className="book-add-form-cover">
        <label>
          Book Cover:
          <input type="file" onChange={handleCoverChange} />
        </label>
        {coverUrl && <img src={coverUrl} alt="Book cover" className="cover-img" />}
      </div>
      <div className="book-add-form-name">
        <label>
          Book Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <div className="book-add-form-author">
        <label>
          Author:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </label>
      </div>
      <div className="book-add-form-summary">
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
      </div>
      <button className="book-add-form-submit" type="submit">Add Book</button>
    </form>
  );
}

export default BookAdd;
