import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <div className="nav-container bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="logo">
          <a href="/" className='brand text-white text-xl font-bold'>Ritik Raj</a>
          <div className="social-icons flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-white hover:text-gray-400" />
            </a>
            <span className="social-name text-gray-400">LinkedIn</span>
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} className="text-white hover:text-gray-400" />
            </a>
            <span className="social-name text-gray-400">GitHub</span>
          </div>
        </div>
        
        {/* Uncomment and modify the following section for navigation links */}
        {/* <div className='navbar-container'>
          <nav className='navbar'>
            <ul>
              <li><a className='nav-a' href="/about">About</a></li>
              <li><a className='nav-a' href="#projects">Projects</a></li>
            </ul>
          </nav>
        </div> */}
      </div>
    </>
  );
}
