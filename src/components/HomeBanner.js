import React, { useState, useEffect } from 'react';
import mykhailochudyk from '../photos/background.jpg';
import './styling/HomeBanner.css';

const phrases = ["software engineer", "youth leader", "problem solver", "Ukrainian"];

function HomeBanner() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); 
  const [phraseIndex, setPhraseIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (index > 0) {
        setTimeout(() => {
          setText((text) => text.slice(0, text.length - 1));
          setIndex((index) => index - 1);
        }, 100); 
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex) => (phraseIndex + 1) % phrases.length);
      }
    } else {
      if (index < phrases[phraseIndex].length) {
        timeoutId = setTimeout(() => {
          setText((text) => text + phrases[phraseIndex].charAt(index));
          setIndex((index) => index + 1);
        }, 200);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); 
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting, phraseIndex]);

  const sectionStyle = {
    backgroundImage: `url(${mykhailochudyk})`
  };

  return (
    <section id="home" className="home-banner" style={sectionStyle}>
      <div>
        <h1>Hi, I'm Mykhailo! I'm a </h1>
        <h2><span className="typed-text">{text}</span></h2>
      </div>
    </section>
  );
}

export default HomeBanner;
