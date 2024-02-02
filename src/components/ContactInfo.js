import React from 'react';
import './ContactInfo.css';
import emailIcon from '../email.png';
import linkedinIcon from '../linkedin.png';
import githubIcon from '../github.png';
import instagramIcon from '../instagram.png';
import telegramIcon from '../telegram.png';


function ContactInfo() {
    return (
      <footer className="contact-info" id="contact">
        <p>Contact Me:</p>
        <a href="https://www.linkedin.com/in/mykhailo-chudyk/" className="social-link" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /> LinkedIn</a>
        <a href="https://github.com/mchudyk/" className="social-link" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /> GitHub</a>
        <a href="mailto:mykhailo.m.chudyk@gmail.com" className="social-link"><img src={emailIcon} alt="Email" /> Email</a>
        <a href="https://t.me/mchudyk" className="social-link" target="_blank" rel="noopener noreferrer"><img src={telegramIcon} alt="Telegram" /> Telegram</a>
        <a href="https://www.instagram.com/mykhailo.chudyk/" className="social-link" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /> Instagram</a>
      </footer>
    );
  }
  
  export default ContactInfo;