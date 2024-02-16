import React from 'react';
import './styling/Header.css'

function Header() {
    return (
      <header className="App-header">
        <a href="#home" className="name-link">Mykhailo Chudyk</a>
        <nav>
          <a href="#about">About Me</a>
          <a href="#experience-projects">Experience & Projects</a>
          <a href="#current">What I'm Working On</a>
          <a href="mailto:mykhailo.m.chudyk@gmail.com?subject=Contact from Website">Connect</a>
          <a href="https://drive.google.com/file/d/1H1KGycsSFdyjMLo__UdykVmbqKGJnk5i/view?usp=sharing" id="resume" target="_blank" rel="noreferrer noopener">Resume</a>
        </nav>
      </header>
    );
  }

export default Header;