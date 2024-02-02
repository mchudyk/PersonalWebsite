import React from 'react';
import './Header.css'

function Header() {
    return (
      <header className="App-header">
        <a href="#home" className="name-link">Mykhailo Chudyk</a>
        <nav>
          <a href="#about">About Me</a>
          <a href="#experience">Experience & Projects</a>
          <a href="#current">What I'm Working On</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }
  

export default Header;