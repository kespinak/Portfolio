
import React from 'react'
import './HomeBgStyles.css';
import imgHomeBg from '../assets/home-bg.jpg';
import { Link } from 'react-router-dom';

import HomeType from '../components/HomeType';
import { Container, Row, Col } from 'react-bootstrap';
import HomePart2 from './HomePart2';


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

            <div className='bottom' >
              <h1> My Skills</h1>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>HTML & CSS</li>
                </ul>
            </div>

          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomeBackground;