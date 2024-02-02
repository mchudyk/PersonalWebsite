import React from 'react';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import AboutMe from './components/AboutMe';
import ExperienceProjects from './components/ExperienceProjects';
import CurrentWork from './components/CurrentWork';
import ContactInfo from './components/ContactInfo';
import './App.css'; 


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeBanner />
        <AboutMe />
        <ExperienceProjects />
        <CurrentWork />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;