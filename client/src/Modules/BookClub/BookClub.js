import React, { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import axios from 'axios';
import './BookClub.css';

const BookClub = () => {
  const match = useMatch('/bookclub/:id');
  const [bookClub, setBookClub] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/bookclub/${match.params.id}`)
      .then(response => {
        setBookClub(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [match.params.id]);

  return (
    <div className="bookClub-container">
      <h2 className="bookClub-title">Book Club Details</h2>
      {bookClub && (
        <div className="bookClub-details">
          <img className="bookClub-cover" src={bookClub.image} alt="Book Cover" />
          <h3 className="bookClub-name">{bookClub.name}</h3>
          <p className="bookClub-description">{bookClub.description}</p>
          <p className="bookClub-nextMeeting">Next Meeting: {bookClub.nextMeeting}</p>
          <p className="bookClub-location">Location: {bookClub.location}</p>
        </div>
      )}
    </div>
  );
};

export default BookClub;
