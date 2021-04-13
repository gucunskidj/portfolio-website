import React, {Component} from 'react';
import './menu-button.styles.scss';

class MenuButton extends Component {
  render() {
    return (
      <div id='lines-menu' onMouseDown = {this.props.handleMouseDown}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    );
  }
}

export default MenuButton;