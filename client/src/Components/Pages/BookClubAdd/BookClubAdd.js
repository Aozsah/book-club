import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './BookClubAdd.css';

function BookClubAdd() {
  const [cover, setCover] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate ();
  const formData = new FormData();
  formData.append("cover", cover);
  formData.append("name", name);
  formData.append("description", description);

  function handleCoverChange(event) {
    setCover(event.target.files[0]);
    setCoverUrl(URL.createObjectURL(event.target.files[0]));
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/api/book-clubs", {
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
    <form className="book-club-add-form" onSubmit={handleSubmit}>
      <div className="book-club-add-form-cover">
        <label>
          Book Club Cover:
          <input type="file" onChange={handleCoverChange} />
        </label>
        {coverUrl && <img src={coverUrl} alt="Book club cover" className="cover-img" />}
      </div>
      <div className="book-club-add-form-name">
        <label>
          Book Club Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div className="book-club-add-form-description">
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
      </div>
      <button className="book-club-add-form-submit" type="submit">Add Book Club</button>
    </form>
  );
}

export default BookClubAdd;
