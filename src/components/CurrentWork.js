import React, { useEffect } from 'react';
import './styling/CurrentWork.css'; // Ensure this path is correct

function CurrentWork() {
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
        threshold: 0.1, // Adjust as necessary
      }
    );

    const content = document.querySelector('.current-work .content');
    if (content) observer.observe(content);

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div className="current-work" id="current">
      <div className="heading">
        <h1>What I'm currently working on</h1>
      </div>
      <div className="content">
        <p>I'm currently spending my spring semester in London, taking one of the most important classes for my concentration - Software Engineering. Additionally, I'm learning about modeling Complex Systems using mathematical theories and simulations, as well as an introduction to economics.</p>
        <p>In my free time, I'm working on my personal project, Dreamify, a website where people can create bedtime stories for their children. Additionally, I'm working on a Twitter Analytics project, designed to help active Twitter users analyze how using social media affects their life.</p>
      </div>
    </div>
  );
}

export default CurrentWork;