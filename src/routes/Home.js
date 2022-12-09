import React from 'react';
import Navbar from '../components/Navbar';
import HomeBackground from '../components/Home-bg';
import Footer from '../components/Footer';
import HomePart2 from '../components/HomePart2';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBackground />
      <HomePart2 />
      <Footer />
    </div>
  )
}

export default Home