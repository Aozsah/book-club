import React from 'react'
import  './Profile.css';
import BookIRead from './BooksIRead';
import ClubsImIn from './ClubsImIn';
import { useState } from 'react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('');

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSubmitClick() {
    setIsEditing(false);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile_header">
          <img className='profile_photo' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <div className='col-8'>
            <h3>Ben kimim</h3>
            <div>
              {isEditing ? (
                <div className='profile_buttons'>
                  <textarea  maxLength={300} className='profile_text' onChange={handleTextChange} value={text} />
                  <button className='submit_button' onClick={handleSubmitClick}>Submit</button>
                </div>
              ) : (
                <div>
                  <div>{text}</div>
                  <button className='edit_button' onClick={handleEditClick}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='bookIRead'>
          <h1 className="profile_h1">Okuduğum Kitaplar</h1>
          <BookIRead/>
        </div>

        <div className='clubImIn'>
          <h1 className="profile_h1">Kulüplerim</h1>
          <ClubsImIn />
        </div>
      </div>
    </div>
  )
}

export default Profile
