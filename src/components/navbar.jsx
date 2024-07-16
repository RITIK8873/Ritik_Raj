import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <div className="nav-container bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="logo">
          <a href="/" className='brand text-white text-xl font-bold'>Ritik Raj</a>
          <div className="social-icons flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/ritik-raj-792461222/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-white hover:text-gray-400" />
            </a>
            {/* <span className="social-name text-gray-400">LinkedIn</span> */}
            <a href="https://github.com/RITIK8873" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} className="text-white hover:text-gray-400" />
            </a>
            {/* <span className="social-name text-gray-400">Instagram</span> */}
            <a href="https://www.instagram.com/ritik_raj_7644?igsh=MXR4ZGplMzd0OWJjeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} className="text-white hover:text-gray-400" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100029549382362" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} className="text-white hover:text-gray-400" />
            </a>
            {/* <span className="social-name text-gray-400">GitHub</span> */}
          </div>
        </div>
        
        <div className='navbar-container'>
          <nav className='navbar'>
            <ul>
              <li><a className='nav-a' href="/">Personal Blogs</a></li>
              {/* <li><a className='nav-a' href="#projects">Projects</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
