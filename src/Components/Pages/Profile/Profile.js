import React from 'react'
import  './Profile.css';


function Profile() {
  return (
    <div className='profile'>
      <div>
        <div>
        <img className='profile_photo' src={require('..//..//..//assets/images/emremataraci.jpg')} />
        </div>
        <h1 className="profile_h1_first" > Okuduğum Kitaplar</h1>
        <h4 className="profile_h4"> Buraya Kitap Resimleri Gelecek...</h4>
        <h1 className="profile_h1"> Kulüplerim</h1>
        <h4 className="profile_h4"> Buraya Kulüp Resimleri Gelecek...</h4>


      </div>
    </div>
  )
}

export default Profile
