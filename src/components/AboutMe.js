import React, { useEffect } from 'react';
import './styling/AboutMe.css'; 

function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    const content = document.querySelector('.about-me .content');
    if (content) observer.observe(content);

    return () => observer.disconnect(); 
  }, []);

  return (
    <div className="about-me" id="about">
      <div className="heading">
        <h1>About Me</h1>
      </div>
      <div className="content">
        <p>Hello! I'm a junior at <a href="https://www.minerva.edu/" target="_blank" rel="noopener noreferrer">Minerva University</a>, recognized for its innovative approach as a global university by WURI. I'm pursuing a major in Computer Science and a minor in Business, with a keen interest in Software Engineering and Startups.</p>
        <p>My journey began in a small village in <a href="https://en.wikipedia.org/wiki/Ukraine" target="_blank" rel="noopener noreferrer">Ukraine</a>, where I distinguished myself with top achievements in Olympiads in Computer Science, Mathematics, and Physics. During my gap year, I co-founded the <a href="https://www.instagram.com/molodizhna_rada_dolyna/" target="_blank" rel="noopener noreferrer">Youth Council</a>, one of the most effective youth councils in Western Ukraine. My admission to Minerva University was made possible through the support of <a href="https://www.ugs.foundation/" target="_blank" rel="noopener noreferrer">Ukraine Global Scholars</a>, a non-profit organization that assists Ukrainians in gaining admission to premier Western universities.</p>
        <p>I am dedicated to building my future as a software engineer and emerging leader, aiming to add significant value to society.</p>
      </div>
    </div>
  );
}

export default AboutMe;