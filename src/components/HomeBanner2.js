import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import aboutBG from '../assets/about-bg.png';
import './HomeBannerStyles.css';

const HomeBanner2 = () => {
  return (
    
    <Container>
      <Row>
        <Col className="home-about-description">
          <h1 style={{fontSize: '2.6em'}}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className='home-about-body'> 
            My favorite part to programming is being able to learn something new every day. 
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> Javascript, CSS, and Python. </b>
            </i>  
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">
                Web Technologies, Application developement and Products{' '}
              </b>{' '}
              and also in areas related to <b className="purple">Clouds.</b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {' '}
                Modern Javascript Library and Frameworks
              </b>
            </i>
          </p>
        </Col>

        <Col>
          <div className='right' >
            <div className='img-container'>
              <img className='aboutImage' src={aboutBG} alt='aboutBackground' />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeBanner2