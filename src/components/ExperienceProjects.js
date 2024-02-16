import React, { useState } from 'react';
import './styling/ExperienceProjects.css';
import experience1 from '../photos/experience1.jpg';
import experience2 from '../photos/experience2.jpg';
import experience3 from '../photos/experience3.gif';
import experience4 from '../photos/experience4.jpg';

const experiences = [
  {
    id: 1,
    title: "Youth Council of Dolyna",
    description: "The Youth Council of Dolyna was co-founded in 2020 as a center that united the youth of my city. As the head, I managed a body of over 20 members. Over approximately one and a half years, we implemented more than 30 projects of varying scales. The largest project, with a total budget of about $150,000, is a 5-year-long initiative to build a Youth Center in the city—a space where young people can implement their ideas and grow.",
    imageUrl: experience1,
  },
  {
    id: 2,
    title: "UN Development Program",
    description: "As a Data Analyst Intern at the UNDP from Sep 2022 to May 2023, I spearheaded the development of three national polls via Telegram and Viber, collecting 7,961 responses organized into databases. I synthesized these findings into a live dashboard with 29 visualizations using Looker and Tableau, aiding in the development of four Ukrainian post-war scenarios. My work encompassed data mining with SQL, statistical and sentiment analysis, and optimizing analysis processes with Excel, improving efficiency by 20%.",
    imageUrl: experience2,
  },
  {
    id: 3,
    title: "Telegram Wrapped",
    description: "I designed and implemented a platform that generates detailed analytics of Telegram usage. This platform offers insights such as average texting duration, the most commonly used emojis, and other key statistics. Additionally, it features a customizable query interface that allows users to explore specific aspects of their activity. These queries are processed and analyzed using the OpenAI API, leveraging natural language processing techniques to provide tailored responses. ",
    imageUrl: experience3,
  },
  {
    id: 4,
    title: "Plagiarism Detector",
    description: "I conducted a comprehensive theoretical analysis to evaluate 3 major methods for detecting plagiarism. By developing optimized hash functions, I successfully engineered an effective plagiarism detection system that demonstrated exceptional accuracy on the test dataset (93%). I performed a detailed examination of the system's performance, focusing on the scalability of running time and memory consumption. This analysis not only highlights the efficiency of the detection algorithm but also underscores its potential for handling large datasets in software engineering applications.",
    imageUrl: experience4,
  },
];

function ExperienceProjects() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  const handleUserInteraction = (experience) => {
    setActiveExperience(experience);
  };

  return (
    <div className="experience-projects" id = "experience-projects">
      <nav className="navigation-bar">
        {experiences.map((experience) => (
          <button
            key={experience.id}
            onClick={() => handleUserInteraction(experience)}
            className={activeExperience.id === experience.id ? 'nav-item active' : 'nav-item'}
          >
            {experience.title}
          </button>
        ))}
      </nav>
      <div className="content-area">
        <div className="photo-frame">
          <img src={activeExperience.imageUrl} alt={activeExperience.title} />
        </div>
        <div className="description">
          <h2>{activeExperience.title}</h2>
          <p>{activeExperience.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceProjects;