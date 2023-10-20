import React, { useState, useEffect } from 'react';
import './IntelligenceApplication.css'; 
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';

const imageList = [slide1, slide2, slide3, slide4];
const descriptionList = [
  'Consistently delivers business intelligence applications',
  'Delivers business intelligence applications Consistently',
  'Consistently delivers business intelligence applications',
  'Delivers business intelligence applications Consistently',
];

const IntelligenceApplication = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="intelligence-application">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageList[currentImageIndex]})` }}
      >
        <div className="text">
          <h2>{descriptionList[currentImageIndex]}</h2>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceApplication;
