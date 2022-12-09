import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Work from '../components/Work';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Work />
      <div heading='PROJECTS'>
        <h1 className="project-heading"> </h1>
      </div>
      <Footer />
    </div>
  )
}

export default Projects