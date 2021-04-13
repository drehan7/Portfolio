import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

import { SocialIcon } from 'react-social-icons';


import './styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {

  const [section, setSection] = useState('about')

  const chooseSection = (e) => {
    setSection(e.target.id)
  }

  return (
    <div className="app-container">
      <div className="home-main-container">
        <div className="name-container" >
          Dawud Saiyed Rehan
          <div className="social-media-container">
            <ul>
              <li><SocialIcon network="github" onClick={() => window.open(`https://github.com/drehan7`, "_blank")} bgColor="white" /></li>
              <li><SocialIcon onClick={() => window.open(`https://www.linkedin.com/in/dawud-rehan-222624198/`, "_blank")} network="linkedin" bgColor="white" /></li>
            </ul>

          </div>
        </div>
        <div className="nav-container">
          <button id="about" className={`about-button button ${(section === 'about') ? "selecte" : ""}`} onClick={chooseSection}>About</button>
          <button id="projects" className={`projects-button button ${(section === 'projects') ? "selecte" : ""}`} onClick={chooseSection}>Projects</button>
          <button id="resume" className={`resume-button button ${(section === 'resume') ? "selecte" : ""}`} onClick={chooseSection}>Resumé</button>
          <button id="contact" className={`contact-button button ${(section === 'contact') ? "selecte" : ""}`} onClick={chooseSection}>Contact</button>
        </div>
      </div>
      <div className="body-container">
        <About section={section} />
        <Projects section={section} />
        <Resume section={section} />
        <Contact section={section} />
      </div>


    </div>
  )
}

export default App;
