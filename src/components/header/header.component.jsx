import React from 'react';
import './header.styles.scss';
import {Link} from 'react-scroll';
import PortfolioLogo from '../portfolio-logo/portfolio-logo.component';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <PortfolioLogo />
    </div>
    <div className='options'>
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

export default Header;