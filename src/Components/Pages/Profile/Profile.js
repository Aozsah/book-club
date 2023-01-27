import React from 'react'
import  './Profile.css';
import BookIRead from './BooksIRead';
import ClubsImIn from './ClubsImIn';


function Profile() {
  return (
    <div className='profile'>
      <div className="container">
      <div className="profile_header ">
            <img className='profile_photo' src={require('..//..//..//assets/images/emremataraci.jpg')} />
            <div className='col-8'>
            <h3 >Ben kimim</h3>
        <textarea className='biography'>En çok felsefe okumayı severim...</textarea>
        </div>
        </div>
        
        <div className='bookIRead'>
        <h1 className="profile_h1" > Okuduğum Kitaplar</h1>

        <BookIRead className="bookiread"/>
        </div>
        <div className='clubsImIn'></div>
        <h1 className="profile_h1"> Kulüplerim</h1>
        <ClubsImIn className="clubsImIn"/>
        </div>

    </div>
  )
}

export default Profile
