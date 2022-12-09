import './AboutContentStyles.css';
import aboutBG from '../assets/about-bg.png';

import React from 'react'

const AboutContent = () => {
  return (
    <>
      <div className='about' >

        <div className='left' >
          <h1> Know Who I AM</h1>
          <p>Hi Everyone, I'm Kevin Espina.</p>
          <p>I'm a Full Stack Web Developer.</p>
          <br />
          <p>Apart from coding, some other activities that I love to do:
            <ul> 
              <li>Playing Chess</li>
              <li>Playing Pickleball</li>
              <li>Climbing Boulders</li>
              <li>Watching Anime</li>
            </ul>
          </p>
        </div>
        

        <div className='right' >
          <div className='img-container'>
            <img className='aboutImage' src={aboutBG} alt='aboutBackground' />
          </div>
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

      </div>
    </>
  )
}

export default AboutContent;