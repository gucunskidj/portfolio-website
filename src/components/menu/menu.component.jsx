import React, {Component} from 'react';
import './menu.styles.scss';
import {Link} from 'react-scroll';

class Menu extends Component {
  render() {
    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div id='flyoutMenu' onMouseUp={this.props.handleMouseDown} className={visibility}>
        <div className='flyout-menu-options'>
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
    );
  }
}

export default Menu;