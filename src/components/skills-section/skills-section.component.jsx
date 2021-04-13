import React from 'react';
import './skills-section.styles.scss';
import Skill from '../skill/skill.component';
import skillsData from './skills.data';


const Skills = () => { 
  
  return (
    <div className='skills-container' id='skills'>
      <div className='skills-title'>
        <h1>Skills</h1>
      </div>
      <div className='skills-logo-name'>
        {
          skillsData.map(({id, ...otherSkillsProps}) => (
            <Skill key={id} {...otherSkillsProps}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills;