import React from 'react';
import './skill.styles.scss';

const Skill = ({skillLogo, skillName}) => (
  <div className='skill-container'>
    <div className='skill-logo' style={{ backgroundImage: `url(${skillLogo})` }}>
    </div>
    <div className='skill-name'>
        {skillName}
    </div>
  </div>
)

export default Skill;