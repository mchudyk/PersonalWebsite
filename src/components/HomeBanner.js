import React, { useState, useEffect } from 'react';
import mykhailochudyk from '../mykhailochudyk2.jpg';
import './HomeBanner.css';

const phrases = ["software engineer", "youth leader", "problem solver"];

function HomeBanner() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Tracks the current character index
  const [phraseIndex, setPhraseIndex] = useState(0); // Tracks the current phrase
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (index > 0) {
        // Deleting characters
        setTimeout(() => {
          setText((text) => text.slice(0, text.length - 1));
          setIndex((index) => index - 1);
        }, 100); // Slower deletion speed
      } else {
        // Once deletion is complete, start typing the next phrase
        setIsDeleting(false);
        setPhraseIndex((phraseIndex) => (phraseIndex + 1) % phrases.length);
      }
    } else {
      if (index < phrases[phraseIndex].length) {
        // Typing characters
        timeoutId = setTimeout(() => {
          setText((text) => text + phrases[phraseIndex].charAt(index));
          setIndex((index) => index + 1);
        }, 200); // Slower typing speed
      } else {
        // Once typing is complete, pause before starting deletion
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // 3-second pause before deletion
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
