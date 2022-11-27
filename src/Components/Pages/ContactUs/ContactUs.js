import React from 'react'
import  './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact_main_div'>
      <h1 className='contact_h1_title'>Our Team</h1>

          <div className='contact_div'>
          <img className='contact_img' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <h2 className='contact_h2'>Emre Mataracı  <h4>Front-end Developer & Team Leader</h4></h2>
          </div>

          <div className='contact_div'>
          <img className='contact_img' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <h2 className='contact_h2'>Safahan Yıldız  <h4>Front-end Developer</h4></h2>
          </div>
          
          <div className='contact_div'>
          <img className='contact_img' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <h2 className='contact_h2'>Ahmet Özkan Şahin  <h4 className='contact_h4'>Back-end Developer</h4></h2>
          </div>

          <div className='contact_div'>
          <img className='contact_img' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <h2 className='contact_h2'>Mehmet Can  <h4>Back-end Developer</h4></h2>
          </div>

          <div className='contact_div'>
          <img className='contact_img' src={require('..//..//..//assets/images/emremataraci.jpg')} />
          <h2 className='contact_h2'>Seçkin  <h4>Back-end Developer</h4></h2>
          </div>
          
  
    </div>
  )
}

export default ContactUs
