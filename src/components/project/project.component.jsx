import React from 'react';
import './project.styles.scss';


const Project = ({projectName, projectDescription, projectImg, projectURL}) => (
  <div className='project-container'>
    <div className='project-img-container'>
      <a href={projectURL} rel='noopener noreferrer' target='_blank'>
        <div className='project-img' style={{ backgroundImage: `url(${projectImg})` }} />
      </a>
    </div>
    <div className='project-text'>
      <h2>{projectName}</h2>
      <p>{projectDescription}</p>
    </div>
  </div>
)

export default Project;