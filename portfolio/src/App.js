import Projects from './Projects';
import Resume from './Resume';
import About from './About';

import { SocialIcon } from 'react-social-icons';


import './styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {



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
          <button className="about-button button">About</button>
          <button className="projects-button button">Projects</button>
          <button className="resume-button button" >Resume</button>
        </div>
      </div>
      <About />

    </div>
  )
}

export default App;
