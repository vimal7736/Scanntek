import React from 'react';
import './Service.css';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

const services = ['Software', 'Digital Marketing', 'Hardware', "Web Designing", "Graphic Designing", "Networking"];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className='ourservice'>OUR SERVICES</h2>
      <div className="row">
        <div className="service-row">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="service-card">
              <h1>{service}</h1>
              <div className='service-innercard2'>
                <FaArrowRight style={{ height: "80px", width: "80px" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="service-row">
          {services.slice(3).map((service, index) => (
            <div key={index} className="service-card">
              <h1>{service}</h1>
              <div className='service-innercard2'>
                <FaArrowRight style={{ height: "80px", width: "80px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
