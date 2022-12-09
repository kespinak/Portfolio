
import React from 'react'
import './HomeBgStyles.css';
import imgHomeBg from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';

import HomeType from '../components/HomeType';
import { Container, Row, Col } from 'react-bootstrap';

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
        <Container>
          <Row>
            <h1 className='heading'>
              Hi There!{' '}
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h1>

            <h1 className='heading-name'>
              I'M
              <strong className='main-name'> Kevin Espina</strong>
            </h1>

            <h1>
              <HomeType />
            </h1>

            <div>
              <Link to='/project' className='btn'>Projects </Link>
              <Link to='/contact' className='btn btn-light'>Contact </Link>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomeBackground;