import React from 'react';
import './menu-header.styles.scss';
import {Link} from 'react-scroll';
import {ReactComponent as Logo} from '../../assets/portfoliologo.svg';

const Menu = () => (
  <div className='menu-container'>
    <div className='logo-container'>
      <Logo className='logo'/>
    </div>
    <div className='menu-options'>
      <Link
        className='option'
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >Home
      </Link>
      <Link
        className='option'
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >Skills
      </Link>
      <Link
        className='option'
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >Projects
      </Link>
      <Link
        className='option'
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >Contact
      </Link>
    </div>
  </div>
)

export default Menu;