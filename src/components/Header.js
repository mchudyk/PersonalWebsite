import React from 'react';
import './styling/Header.css'

function Header() {
    return (
      <header className="App-header">
        <a href="#home" className="name-link">Mykhailo Chudyk</a>
        <nav>
          <a href="#about">About Me</a>
          <a href="#experience">Experience & Projects</a>
          <a href="#current">What I'm Working On</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/18jMfopl_vGMTwvWFCSV1_svfIpdZkYTF/view?usp=sharing" id="resume" target="_blank" rel="noreferrer noopener">Resume</a>
        </nav>
      </header>
    );
  }

export default Header;