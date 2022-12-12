import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import headerImg from '../assets/header-img.svg';
import './HomeBannerStyles.css';

import Col from 'react-bootstrap/Col';
import HomeType from './HomeType';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const HomeBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const dataText = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 200;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % dataText.length;
    let fullText = dataText[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
    
    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    


  return (
    <section className='banner' id='home'>
      <Container>
        <Row ClassName='align-items-center'>
  
          <Col xs={12} md={6} xl={7} >
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1> Hi There!{' '}</h1>  <h1><span className='wave wrap' role='img' aria-labelledby='wave'> 👋🏻 </span></h1>
            <h1>{`I'm Kevin`} </h1> 
            {/* <h1><span className='wrap'>{text} </span></h1> */}
            <h1><span className='wrap'> <HomeType/></span></h1>
            <p>Here are a few technologies I've been working with recently:</p>
          </Col>
  
          
  
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img'/>
          </Col>
  
        </Row>
      </Container>
    </section>
  )
}

export default HomeBanner;