// Navbar.jsx

import React from 'react';
import './navbar.css';
import YZicon from '../../images/logo-color.png'

const Navbar = () => {
  return (
    <nav className="navvbar">
      <img src={YZicon} className='main-logo'></img>
      {/* <div className="navbar-brand">Flowers Shop</div> */}
      <ul className="navvbar-navv">
        <li className="navv-item">
          <a href="/" className="navv-link">Home</a>
        </li>
        <li className="navv-item">
          <a href="/products" className="navv-link">
             باقات ورود
          </a>
        </li>
        <li className="navv-item">
          <a href="/about" className="navv-link">
            باقات للاعراس
          </a>
        </li>
        <li className="navv-item">
          <a href="/contact" className="navv-link">
            تنسيق زهور 
          </a>
        </li>
        <li className="navv-item">
          <a href="/contact" className="navv-link">
            تاج\طوق زهور
          </a>
        </li>
        <li className="navv-item">
          <a href="/contact" className="navv-link">
            هدايا
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
