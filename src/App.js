import React from 'react';
import './App.css';
import Home from './components/home-section/home-section.component';
import Skills from './components/skills-section/skills-section.component';
import Projects from './components/projects-section/projects-section.component';
import Contact from './components/contact-section/contact-section.component';
import Copyright from './components/copyright/copyright.component';

function App() {
  return (
    <div>
       <Home />
       <Skills />
       <Projects />
       <Contact />
       <Copyright />
    </div>
  );
}

export default App;
