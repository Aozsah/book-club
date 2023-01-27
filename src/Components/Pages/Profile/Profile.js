import React from 'react'
import  './Profile.css';
import BookIRead from './BooksIRead';
import ClubsImIn from './ClubsImIn';


function Profile() {
  return (
    <div className='profile'>
      <div>
        <div classname="row">
        <img className='profile_photo' src={require('..//..//..//assets/images/emremataraci.jpg')} />
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
