import React from 'react';
import './logo-and-menu.styles.scss';
import {ReactComponent as Logo} from '../../assets/portfoliologo.svg';
import MenuContainer from '../menu-container/menu-container.component';
import {Link} from 'react-scroll';

const LogoAndMenu = () => (
  <div className='logo-and-menu-container'>
    <div className='logo-container'>
      <Logo className='logo'/>
    </div>
    <div className='menu-container'>
      <MenuContainer />
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

export default LogoAndMenu;