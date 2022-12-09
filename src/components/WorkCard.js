import React from 'react';
import './WorkCardStyles.css';
import taskify from '../assets/Taskify.png';
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>My Recent <strong className="purple"> Works </strong> </h1>
      <p>Here are a few project's I've worked on recently.</p>
      <div className='project-container'>
        <div className='project-card'>
          <img src={taskify} alt='taskifyImage' />
          <h2 className='project-title'>Taskify</h2>
          <div className='taskify-description'>
            <p> Taskify is a task management application that allows users to create, edit, and delete tasks.
            <br />
            <br />
            TechStack: React, Nodejs, Express, and MongoDB. 
            </p>
          </div>
          <div className='taskify-btn' >
            <NavLink to='google.com' className='btn'>View Project</NavLink>
            <NavLink to='https://github.com/kespinak/Bug-Tracker' className='btn btn-light'>View Repository</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard