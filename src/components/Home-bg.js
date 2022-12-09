
import React from 'react'
import './HomeBgStyles.css';
import imgHomeBg from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';

// import laptopImg from "../../Assets/about.png";
// import homeLogo from '../../Assets/home-main.svg';
// <img src={homeLogo} alt="home pic" className="img-fluid" />
// <img src={laptopImg} alt="about" className="img-fluid" />



const HomeBackground = () => {
  return (
    <div className='HomeBg'>
      <div className='mask'>
        <img className='img-fluid' src={imgHomeBg} alt="homePic" />
      </div>
      <div className='content'>
        <p>Hi, I'm a FullStack Developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to='/project' className='btn'>Projects </Link>
          <Link to='/contact' className='btn btn-light'>Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBackground;