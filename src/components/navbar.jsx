import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar () {
  return (
    <>
    <div className="nav-container">
      <div className="logo">
        <a href="/" className='brand'>Ritik Raj</a>
        <div className="social-icons">
          <FaLinkedin size={25} />
          <span className="social-name">Linkedin</span>
          <FaGithub size={25} />
          <span className="social-name">GitHub</span>
        </div>
      </div>
      <div className='navbar-container'>
        <nav className='navbar'>
          <ul>
            <li><a className='nav-a' href="/about">About</a></li>
            <li><a className='nav-a' href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
    
    </>
  );
}

