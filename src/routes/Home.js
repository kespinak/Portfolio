import React from 'react';
import Navbar from '../components/Navbar';
import HomeBackground from '../components/Home-bg';
import Footer from '../components/Footer';
import HomePart2 from '../components/HomePart2';

import HomeSkillSet from '../components/HomeSkillSet';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBackground />
      {/* <HomePart2 /> */}
      <HomeSkillSet />
      <Footer />
    </div>
  )
}

export default Home