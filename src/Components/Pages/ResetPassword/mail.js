import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Mail.css';

export const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kykjnol', 'template_cel5314', form.current, 'XSrMokHXa8DxlwHxB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='pass' ref={form} onSubmit={sendEmail}>
        <h1 className='h1'>Şifreni sıfırla</h1>
      <label>Kullanıcı Adın</label>
      <input type="text" name="user_name" />
      <label>Email adresin</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Gönder" />
    </form>
  );
};