import React from 'react';
// import './MovingLine.css';
import F0 from '../../images/f0.jpg';
import F1 from '../../images/f1.jpg';
import F2 from '../../images/f2.jpg';
import F3 from '../../images/f3.jpg';
import F4 from '../../images/f4.jpg';
import F5 from '../../images/f5.jpg';
import F6 from '../../images/f6.jpg';
import F7 from '../../images/f7.jpg';
import F8 from '../../images/f8.jpg';
import F9 from '../../images/f9.jpg';
import F10 from '../../images/f10.jpg';
import F11 from '../../images/f11.jpg';
import F12 from '../../images/f12.jpg';

import "./autoSlider.css"

function AutoSlider() {

  const photos=[F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12];
return (
    <div className="moving-line">
        <h1 >لدينا جميع أنواع الزهور لجميع أنواع المناسبات</h1>
        <div className="image-container">

          {
            photos.map((item,index) =>  
              <img
              key={index}
              src={item}
              alt={`Image ${  1}`}
              className="moving-image"/>
            )
          }
            {/* <img
                src={WorkoutImg1}
                alt={`Image ${  1}`}
                className="moving-image"/>
            <img
                src={WorkoutImg2}
                alt={`Image ${ 2}`}
                className="moving-image"/>
            <img
                src={WorkoutImg3}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg4}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg5}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg6}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg7}
                alt={`Image ${7}`}
                className="moving-image"/>
            <img
                src={WorkoutImg8}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg9}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg10}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg11}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg12}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg13}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg14}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg15}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg16}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg17}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg18}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg19}
                alt={`Image ${3}`}
                className="moving-image"/>
            <img
                src={WorkoutImg20}
                alt={`Image ${20}`}
                className="moving-image"/>
           */}
      </div>
    </div>
  );
}

export default AutoSlider;