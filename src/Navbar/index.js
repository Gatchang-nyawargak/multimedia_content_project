import React, { useState } from 'react';
import './index.css';
import pic2 from '../assets/pic2.png'
import LandingPage from '../LandingPage';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav">
        <img  src={pic2} alt="logo" id="logo" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>
          <li><a href={LandingPage}>Home</a></li>
          <li><a href="#">Video</a></li>
          <li><a href="#">Writting</a></li>
          <li><a href="#">Podcast</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;