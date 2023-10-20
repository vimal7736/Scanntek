import React, { useState } from "react";
import "./WhatWeAre.css";

const WhatWeAre = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showService, setShowService] = useState(false);

  const toggleOverview = () => {
    setShowOverview(true);
    setShowAboutUs(false);
    setShowService(false);
  };

  const toggleAboutUs = () => {
    setShowOverview(false);
    setShowAboutUs(true);
    setShowService(false);
  };

  const toggleService = () => {
    setShowOverview(false);
    setShowAboutUs(false);
    setShowService(true);
  };

  const hideAll = () => {
    setShowOverview(false);
    setShowAboutUs(false);
    setShowService(false);
  };

  return (
    <div className="submenu-slide" onMouseLeave={hideAll}>
      <div className="left-child">
        <div className="button-container">
          <button onMouseEnter={toggleOverview}>Overview ⮞ </button>
          <button onMouseEnter={toggleAboutUs}>Industries ⮞</button>
          <button onMouseEnter={toggleService}>Services ⮞</button>
        </div>
      </div>
      <div className="right-child">
        {showOverview && (
          <div className="sub-content">
            <h2 className="list-bold sub-right">
              Comprehensive Business Solutions Provider
            </h2>
            <li className="sub-right">
              Offering a wide range of software and hardware solutions, we
              specialize in Point of Sale (POS), ERP, Enterprise Mobility,
              Business Intelligence Reporting, Customer Relationship Management
              (CRM), and more, helping businesses thrive in today's dynamic
              marketplace.
            </li>
          </div>
        )}
        {showAboutUs && (
          <div className="sub-content">
            <li className="sub-right">
              <div className="button-container">
                <li>Restaurant </li>
                <li> Retail </li>
                <li>Health Care </li>
                <li>Banking </li>
                <li>Food and Beverage </li>
              </div>
            </li>
          </div>
        )}
        {showService && (
          <div className="sub-content">
            <li className="sub-right">
              <div className="button-container">
                <li>Web Designing </li>
                <li> Graphic Designing </li>
                <li>Software </li>
                <li>Hardware </li>
                <li>Digital Marketing</li>
              </div>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeAre;
