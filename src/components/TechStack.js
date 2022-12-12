// * look here for more techstacks https://react-icons.github.io/react-icons/icons?name=ai

import React from 'react';
import './TechStackStyles.css';

import {Container, Col, Row} from 'react-bootstrap';
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

const TechStack = () => {
  return (
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
  )
}

export default TechStack;