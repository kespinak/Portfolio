import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
