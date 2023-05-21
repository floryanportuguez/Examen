import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1>CONTACT</h1>
      <p className='ml-20 w-2/3 text-lg'>I sincerely appreciate your visit to my portfolio. I hope you enjoy exploring my work and have found inspiration in my projects. If you have any questions or would like to discuss a possible collaboration, please feel free to contact me using the contact details provided below. Thank you for your interest and support!</p>
      <h2>With just one click we get in touch</h2>
      <div className='text-center font-bold text-xl'>
         <a href="tel:+85106176"><FaPhoneAlt size="1.5em"/> Teléfono: 85106176</a>
         <a href="https://www.linkedin.com/in/floryan-portuguez-617006277" target="_blank" rel="noopener noreferrer"><FaLinkedin size="1.5em"/> LinkedIn: Floryan Portuguez</a> 
         <a href="https://www.facebook.com/Floryan.Portuguez" target="_blank" rel="noopener noreferrer"><FaFacebook size="1.5em"/> Facebook: Floryan Portuguez</a>
         <a href="mailto:floryanportuguez@gmail.com"><FaEnvelope size="1.5em"/> Correo electrónico: floryanportuguez@gmail.com</a>
         <a href="https://github.com/floryanportuguez" target="_blank" rel="noopener noreferrer"><FaGithub size="1.5em"/> GitHub: floryanportuguez</a>
      </div>
    </section>
  );
};

export default ContactMe;


