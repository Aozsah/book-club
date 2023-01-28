import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './BookAdd.css';


function BookAdd() {
  const [cover, setCover] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const navigate = useNavigate ();
  const formData = new FormData();
  formData.append("cover", cover);
  formData.append("name", name);
  formData.append("author", author);
  formData.append("summary", summary);

  function handleCoverChange(event) {
    setCover(event.target.files[0]);
    setCoverUrl(URL.createObjectURL(event.target.files[0]));
}


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handleSummaryChange(event) {
    setSummary(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/books", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    
        navigate("/");
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
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div className="book-add-form-author">
        <label>
          Author:
          <input type="text" value={author} onChange={handleAuthorChange} />
        </label>
      </div>
      <div className="book-add-form-summary">
        <label>
          Description:
          <textarea value={summary} onChange={handleSummaryChange} />
        </label>
      </div>
      <button className="book-add-form-submit" type="submit">Add Book</button>
    </form>
  );
}

export default BookAdd;
