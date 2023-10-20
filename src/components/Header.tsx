import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import WhatWeAre from "./WhatWeAre";

const Header = () => {
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const outletRef = useRef<HTMLDivElement | null>(null); 

  const handleMouseEnterWhoWeAre = () => {
    setShowWhoWeAre(true);
    setShowWhatWeDo(false);
  };

  const handleMouseEnterWhatWeDo = () => {
    setShowWhatWeDo(true);
    setShowWhoWeAre(false);
  };

  const handleMouseEnterOutlet = () => {
    setShowWhoWeAre(false);
    setShowWhatWeDo(false);
  };

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.addEventListener("mouseenter", handleMouseEnterOutlet);
    }
    return () => {
      if (outletRef.current) {
        outletRef.current.removeEventListener("mouseenter", handleMouseEnterOutlet);
      }
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="inner_division" >


        <div className="navbar-logo">
          <Link to="./">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <h4  onMouseEnter={handleMouseEnterWhoWeAre}>Who we are</h4>
          <h4 onMouseEnter={handleMouseEnterWhatWeDo}>What we do</h4>
          <h4>Blog</h4>
        </div>
        <div className="navbar-button">
          <Link to="/contact">
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
        </div>

      </nav>
      <div>
        {showWhoWeAre && <WhoWeAre />}
        {showWhatWeDo && <WhatWeAre />}
      </div>
      <div ref={outletRef}>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
