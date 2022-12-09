import React from 'react';
import './WorkCardStyles.css';
import taskify from '../assets/Taskify.png';
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={taskify} alt='taskifyImage' />
          <h2 className='project-title'>Taskify</h2>
          <div className='taskify-description'>
            <p> Taskify is a task management application that allows users to create, edit, and delete tasks. </p>
          </div>
          <div className='taskify-btn' >
            <NavLink to='google.com' className='btn'>View Project</NavLink>
            <NavLink to='google.com' className='btn'>View Repository</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard