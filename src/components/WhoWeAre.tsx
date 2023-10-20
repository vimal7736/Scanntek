import React, { useState } from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const toggleOverview = () => {
    setShowOverview(true);
    setShowAboutUs(false);
  };

  const toggleAboutUs = () => {
    setShowOverview(false);
    setShowAboutUs(true);
  };

  const hideAll = () => {
    setShowOverview(false);
    setShowAboutUs(false);
  };

  return (
    <div className="submenu-slide" onMouseLeave={hideAll}>
      <div className="left-child">
        <div className="button-container">
          <button onMouseEnter={toggleOverview}>Overview ⮞  </button>
          <button onMouseEnter={toggleAboutUs}>About Us ⮞</button>
        </div>
      </div>
      <div className="right-child">
        {showOverview && (
          <div className="sub-content">
            <h2 className="list-bold sub-right">
              Scanntek IT solutions LLP is a leader in providing integrated point of
              sale solution both in software and hardware
            </h2>
            <li className="sub-right">
              We offer IT integration solution using a combination of hardware
              products and software products suitable to various enterprises let it
              be small or big with a user-friendly customer-configured approach
            </li>
          </div>
        )}
        {showAboutUs && (
          <div className="sub-content">
            <li className="sub-right">
              Established in 2023, Scanntek stands at the forefront of IT integration
              solutions. Our commitment revolves around providing sophisticated
              hardware and software solutions designed to suit the needs of
              enterprises, whether they are small or large. With a focus on
              user-friendly, customer-configured approaches, we ensure that businesses
              are well-equipped to excel in the continuously evolving digital realm.
              Experience the Scanntek advantage and elevate your enterprise to new
              horizons.
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
