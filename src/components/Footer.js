import React from 'react';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <a href="#"><Logo /></a>
      {/* <p className='footer-links'>
        <a href='https://www.instagram.com/dolces_dollhouse/'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='https://chat.whatsapp.com/LZbSBrWxQJYCKvR0kvgeKt'>
          <i className='fa fa-whatsapp'></i>
        </a>
      </p> */}
      <p className='footer-links'>
      <a href='https://www.facebook.com/dolceinnewyork/'>
          <i className='fa fa-facebook-official'></i>
        </a>
        <a href='https://www.instagram.com/dolces_dollhouse/'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='https://chat.whatsapp.com/IC9AV2g5wPq9CYbsNUGrDm'>
          <i className='fa fa-whatsapp'></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
