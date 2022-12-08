import React, { useState } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [hamburgerClick, setHambugerClick] = useState(false);
  const handleHamburgerClick = () => setHambugerClick(!hamburgerClick);

  const [headerColor, setHeaderColor] = useState(false);
  const changeHeaderColor = () => {
    if (window.scrollY >= 100) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };
  window.addEventListener('scroll', changeHeaderColor);

  return (
    <div className={headerColor ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1> Kevin Espina </h1>
      </Link>
      <ul className={hamburgerClick ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>  
        <li>
          <Link to="/project">Projects</Link>
        </li> 
        <li>
          <Link to="/resume">Resume</Link>	
        </li>  
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleHamburgerClick}>
        {hamburgerClick 
          ? ( <FaTimes size={20} style={{color: "#fff"}} /> )
          : ( <FaBars size={20} style={{color: "#fff"}} /> )
        }
      </div>
    </div>
  );
};

export default Navbar;