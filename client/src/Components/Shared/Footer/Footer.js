import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <footer>
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="https://www.linkedin.com/in/emre-mataraci/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              Emre Mataracı
          </section>
          <section className="footer-info__returns">
            BookHub
            <br />
            
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            mtrcemre@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            +90 538 9815383
          </section>
          <section className="footer-info__contact">
          Contact Us
            <br />
          </section>
        </section>
      </section>
    </footer>
  )

}

export default Footer;