// Navbar.jsx

import React from 'react';
import './navbar.css';
import YZicon from '../../images/logo-color.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={YZicon} className='main-logo'></img>
      {/* <div className="navbar-brand">Flowers Shop</div> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
             باقات ورود
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            باقات للاعراس
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            تنسيق زهور 
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            تاج\طوق زهور
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            هدايا
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
