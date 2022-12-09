import React from 'react';
import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';


const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>My Recent <strong className="purple"> Works </strong> </h1>
      <p>Here are a few project's I've worked on recently.</p>
      <div className='project-container'>
        {WorkCardData.map((value, index) => {
          return (
            <WorkCard 
              key={index} 
              imgsrc={value.imgsrc}
              title={value.title}
              description={value.description}
              techStack={value.techStack}
              viewProj={value.viewProj}
              viewRepo={value.viewRepo}              
            />            
          )
        })}
      </div>
    </div>
  )
}

export default Work;