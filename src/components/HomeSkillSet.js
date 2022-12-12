import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import HomeSkillSetStyles from './HomeSkillSetStyles.css';
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {
  SiFirebase,
  SiTypescript,
} from 'react-icons/si'

import imgHomeBg from '../assets/home-bg.jpg';

const HomeSkillSet = () => {
  return (
    <div className='HomeBg'>

      <div className='mask'>
        <img className='img-fluid' src={imgHomeBg} alt="homePic" />
      </div>

      <div className='content'>
        <Container>

          <h1 className='heading'></h1>

          <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
            <Col xs={4} md={2} className="tech-icons">
              <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiFirebase />
            </Col>
          </Row>
          <div className='bottom' ></div>
        </Container>
      </div>

    </div>
  )
}

export default HomeSkillSet