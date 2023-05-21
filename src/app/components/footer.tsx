import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='w-full bg-blue-light shadow mt-12 py-4 fixed text-xl'>
      <div className='flex items-center justify-center gap-1'>
        <a href="https://www.linkedin.com/in/floryan-portuguez-617006277" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="2em"/> </a>
          <a href="tel:+85106176"><FaPhoneAlt size="1.5em"/></a>
        <a href="https://www.facebook.com/Floryan.Portuguez" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="2em" />
        </a>
        <a href="https://www.facebook.com/Floryan.Portuguez" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size="2em"/>
        </a>
      </div>
    </footer>
  )
}


export default Footer;
