import React from 'react'
import './FooterStyles.css';
import { 
  FaHome, 
  FaPhone, 
  FaMailBulk, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn 
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
            <div>
              <p> address1 </p>
              <p> address2 </p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
              760-000-0000
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
              info@gmail.com
            </h4>
          </div>
        </div>
        
        <div className='right' >
          <h4>About the company</h4>
          <p> This is me, Kevin Espina. I enjoy discussing new projects and design challenges. </p>
          <div className='social'>
            <FaFacebookF size={30} style={{color: '#fff', marginRight: '1rem'}}/>
            <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
            <FaLinkedinIn size={30} style={{color: '#fff', marginRight: '1rem'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer