import React from 'react';
import './WorkCardStyles.css';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt={props.alt} />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-description'>
        <p> {props.description} </p>
        <br />
        <p> {props.techStack} </p>
      </div>
      <div className='project-btn' >
        <NavLink to={props.viewProj} className='btn'>View Project</NavLink>
        <NavLink to={props.viewRepo} className='btn btn-light'>View Repository</NavLink>
      </div>
    </div>
  )
}

export default WorkCard