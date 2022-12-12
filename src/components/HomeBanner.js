import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/header-img.svg';
import './HomeBannerStyles.css';

// import Col from 'react-bootstrap/Col';
import HomeType from './HomeType';
import HomeSkillSet from './HomeSkillSet';
import TechStack from './TechStack';
import HomeBanner2 from './HomeBanner2';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const HomeBanner = () => {

  return (
    <>
    {/* <div className='mask'> */}
    <section className='banner' id='home'>
      <Container >
        <Row ClassName='align-items-center'>
  
          {/* <Col xs={12} md={6} xl={7} > */}
          <Col sm={8} >
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1> Hi There!{' '}<span className='wave' role='img' aria-labelledby='wave'> 👋🏻 </span></h1>
            <h1 style={{paddingBottom: 15}} >{`I'M Kevin Espina`} </h1> 
            {/* <h1><span className='wrap'>{text} </span></h1> */}
            <h1><span className='wrap'> <HomeType/></span></h1>
            
          
            <p>Here are a few technologies I've been working with recently:</p>
          
            <TechStack />
          </Col>
  
          {/* <Col xs={12} md={6} xl={5} > */}
          <Col sm={4} >
            <img src={headerImg} alt='Header Img'/>
          </Col>

        </Row>
      </Container>
    </section>
    {/* </div> */}

    <section>
      <HomeBanner2 /> 
    </section>

    {/* <TechStack /> */}
    {/* <HomeSkillSet />  */}
    </>

  )
}

export default HomeBanner;