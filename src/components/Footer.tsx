import React from "react";
import "./footer.css";
import { FaRegAngry, FaSadCry, FaSmile, FaSmileBeam } from "react-icons/fa";
import logo from "../images/logo.png";

function Footer() {
  return (

<div className="padding">



    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-menu">
       <div className="footer-about">
            <div className="footer-headings">
              <p>About</p>
            </div>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-products">
            <div className="footer-headings">
              <p>Products</p>
            </div>
            <ul>
              <li>ERP</li>
              <li>Field Sales Automation</li>
              <li>Restaurants POS</li>
              <li>Retail ERP</li>
              <li>Modular Stock Control System</li>
              <li>Hospital Management ERP</li>
              <li>Hotel Management ERP</li>
              <li>Edu-Management ERP</li>
            </ul>
          </div>
          <div className="footer-hardware">
            <div className="footer-headings">
              <p>Hardware</p>
            </div>
            <ul>
              <li>Digital marketing</li>
              <li>Graphic Designing</li>
              <li>Web designing</li>
              <li>Networking</li>
              <li>CCTV</li>
              <li>Softwares</li>
              <li>Hardwares</li>
            </ul>
          </div>
          <div className="footer-connect">
            <div className="footer-headings">
              <p>Connect</p>
            </div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
            <br />
            <br />
            <br />
            <div className="footer-feedback">
              <br />
              <h2 className="feedback-head">How was your experience</h2>
              <div className="feedback-expressions">
                <FaSmile style={{width:"40px" , height:"40px"}} />
                <FaSadCry style={{width:"40px" , height:"40px"}} />
                <FaRegAngry style={{width:"40px" , height:"40px"}} />
              </div>
            </div>
          </div>
          <div className="footer-more">
            <div className="footer-headings">
              <p>More</p>
            </div>
            <ul>
              <li>Clients</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="footer-end">
<div className="flexed">

          <div className="footer-address">
            <div>
              <img src={logo} style={{width:"106px" , height:"20px"}} alt="" />
            </div>
            <div className="up">
              <p>IT Solutions LLP</p>
            </div>
          </div>

          <div className="footer-address">
            <p>2nd floor, Kedhar Tower Puthiyapalam,
              <span>Calicut, Pin 673002</span>
              <span>Phone: +91 9072700085</span>
            </p>
          </div>
</div>

          <div className="footer-addresss">
            <p>© 2023 Scanntek IT solution. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
