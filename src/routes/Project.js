import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewFooter from '../components/NewFooter'
import Work from '../components/Work';


const Projects = () => {
  return (
    <div>
      <Navbar />
      <Work />
      <div heading='PROJECTS'>
        <h1 className="project-heading"> </h1>
      </div>
      <NewFooter />
      {/* <Footer /> */}
    </div>
  )
}

export default Projects