import React, { useState, useEffect } from 'react';
import './ExperienceProjects.css'; // Make sure to create this CSS file
import experience1 from '../experience1.jpg';
import experience2 from '../experience2.jpg';
import experience3 from '../experience3.jpg';
import experience4 from '../experience4.jpg';

// Sample data for experiences/projects
const experiences = [
  {
    id: 1,
    title: "Youth Council of Dolyna",
    description: "The Youth Council of Dolyna was co-founded in 2020 as a center that united the youth of my city. As the head, I managed a body of over 20 members. Over approximately one and a half years, we implemented more than 30 projects of varying scales. The largest project, with a total budget of about $150,000, is a 5-year-long initiative to build a Youth Center in the city—a space where young people can implement their ideas and grow.",
    imageUrl: experience1,
  },
  {
    id: 2,
    title: "United Nations Development Program",
    description: "As a Data Analyst Intern at the UNDP from Sep 2022 to May 2023, I spearheaded the development of three national polls via Telegram and Viber, collecting 7,961 responses organized into databases. I synthesized these findings into a live dashboard with 29 visualizations using Looker and Tableau, aiding in the development of four Ukrainian post-war scenarios. My work encompassed data mining with SQL, statistical and sentiment analysis, and optimizing analysis processes with Excel, improving efficiency by 20%.",
    imageUrl: experience2,
  },
  {
    id: 3,
    title: "Plagiarism Detector",
    description: "Devised a method that boosted plagiarism detection by 20%, greatly improving the effectiveness of content assessments. Implemented NLP algorithms with Python, leveraging libraries Gensim and Scikit-learn to compare data for similarities.",
    imageUrl: experience3,
  },
  {
    id: 4,
    title: "Telegram Wrapper",
    description: "Developed a platform that creates a summary of telegram usage including statics (e.g, the average time spend texting with people, the most frequent emojies used). ",
    imageUrl: experience4,
  },
];

function ExperienceProjects() {
    const [activeExperience, setActiveExperience] = useState(experiences[0]);
  
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
        { threshold: 0.1 }
      );
  
      document.querySelectorAll('.experience-projects > div').forEach((div) => {
        observer.observe(div);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveExperience((prev) => experiences[(experiences.indexOf(prev) + 1) % experiences.length]);
      }, 6000); // Corrected to change every 10 seconds as per the comment
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="experience-projects" id="experience">
        <div className="description">
        <h2>{activeExperience.title}</h2>
        <div className='active-experience'>
        <p>{activeExperience.description}</p>
        </div>
        <img src={activeExperience.imageUrl} alt={activeExperience.title} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
      </div>
      <div className="list">
        {experiences.map((experience) => (
        <div 
            key={experience.id} 
            onClick={() => setActiveExperience(experience)}
            className={`experience-item ${activeExperience.id === experience.id ? 'active' : ''}`} // Conditional class application
        >
            {experience.title}
         </div>
  ))}
</div>

    </div>
  );
}

export default ExperienceProjects;