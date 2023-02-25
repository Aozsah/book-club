import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-main-div'>
      <h1 className='contact-h1-title'>Meet Our Team</h1>
      <div className='contact-grid'>
        <div className='contact-card'>
          <img className='contact-img' src={require('../../../assets/images/emremataraci.jpg')} alt='Emre Mataraci' />
          <h2 className='contact-name'>Emre Mataracı</h2>
          <h4 className='contact-title'>Full-Stack Developer</h4>
          <p className='contact-bio'>
  Emre is an experienced developer with a passion for creating innovative and efficient solutions. He has a strong background in web development and is always looking for ways to improve and optimize his work. Emre currently works as a Software Developer at YENA Engineering and is also a volunteer at ALT+TAB Incubation Center where he develops projects.
</p>
          <div className='contact-social'>
            <a href='https://www.linkedin.com/in/emre-mataraci/' target='_blank' rel='noreferrer'>LinkedIn<i className='fab fa-linkedin'></i></a>
            <a href='https://github.com/emremataraci' target='_blank' rel='noreferrer'>GitHub<i className='fab fa-github'></i></a>
          </div>
        </div>

        {/* Add more team members here */}

      </div>

      <div className='contact-form'>
        <h2 className='contact-form-title'>Get in Touch</h2>
        <form>
          <div className='contact-form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='contact-form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='contact-form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required></textarea>
          </div>
          <button className='contact-form-button' type='submit'>Send</button>
        </form>
      </div>

      <div className='contact-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.989775357799!2d-73.985330284599!3d40.748440744408835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4cb4d0631c54d22!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645220299638!5m2!1sen!2sus' allowFullScreen loading='lazy'></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
