import React from 'react';
import './home-section.styles.scss';
import LogoAndMenu from '../logo-and-menu/logo-and-menu.component';
import {ReactComponent as SVGIllustration} from '../../assets/web_developer.svg';

const Home = () => (
  <div className='home-container' id='home'>
    <LogoAndMenu/>
    <div className='title-and-illustration'>
      <div className='title'>
        <h1>Hi, I'm Đorđe Gucunski. <br/> I'm Web Developer.</h1>
      </div>
      <div className='illustration-container'>
        <SVGIllustration className='illustration' />
      </div>
    </div>
    <svg
      class="curve"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
    </svg>
  </div>  
)

export default Home;