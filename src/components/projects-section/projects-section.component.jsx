import React from 'react';
import './projects-section.styles.scss';
import Project from '../project/project.component';
import PROJECTS_DATA from './projects.data';


const Projects = () => (
  <div id='projects' className='projects-container'>
    <div className='projects-title'>
      <h1>Projects</h1>
    </div>
    <div className='projects-img-text'>
      {
        PROJECTS_DATA.map(({id, ...otherProjectsProps}) => (
          <Project key={id} {...otherProjectsProps}/>
        ))
      }
    </div>
    <svg
      class="slant"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon points="0,100 100,0 100,100" />
    </svg>
  </div>
)

export default Projects;