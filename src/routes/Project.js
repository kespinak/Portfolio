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
        <h1 className="project-heading"> </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Projects