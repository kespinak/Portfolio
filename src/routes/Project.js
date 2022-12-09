import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <WorkCard />
      <div heading='PROJECTS'>
        <h1 className="project-heading">
          {/* * CLASSNAME='PURPLE' ISNT WORKING */}
          My Recent <strong className="purple"> Works </strong> 
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Projects