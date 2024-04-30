// main.jsx

import React from 'react';
import Img1 from '../../images/b2.jpg'
import './main.css';

const Main = () => {
  return (
    <div className="main" style={{background:Img1 }}>
      <div className="main-content">
        <h1 className="main-sentence">Welcome to our YZ Flowers Shop</h1>
        <div class='categories'>
          <div class='half-cycle'>
            <div class='category-1 category'>
              <span className='category-text'>FLowers</span> 
            </div>
            <div class='category-2 category'>
              <span className='category-text'>Bouquet</span> 
            </div>
          </div>
          <div class='half-cycle'>
            <div class='category-3 category'>
              <span className='category-text'>Gifts</span> 
              
            </div>
            <div class='category-4 category'>
              <span className='category-text'>Plant</span> 
            </div>
          </div>
        </div>


        <h2 className="secondary-sentence">Discover the beauty of nature with our exquisite flowers</h2>
      </div>
    </div>
  );
};

export default Main;
 