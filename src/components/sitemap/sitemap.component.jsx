import React from 'react';
import './sitemap.styles.scss';
import {Link} from 'react-scroll';

const Sitemap = () => (
  <div className='sitemap-container'>
    <h3>Sitemap</h3>
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
)

export default Sitemap;