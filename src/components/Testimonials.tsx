import React from "react";
import "./testimonial.css";
import ananya from "../images/ananya.png";
import john from "../images/john.png";
import neha from "../images/neha.png";

const testimonialData = [
  {
    name: "Ananya",
    text: "This is how people thinks and feel about our testimonial and serices",
    image: ananya,
  },
  
  {
    name: "John",
    text: "Great experience with your company. Highly recommended!",
    image: john,
  },
  {
    name: "Neha",
    text: "Outstanding services. Keep up the good work!",
    image: neha,
  },
  {
    name: "John",
    text: "Great experience with your company. Highly recommended!",
    image: john,
  },
  {
    name: "Ananya",
    text: "I love your testimonial and services. They are amazing!",
    image: ananya,
  },
  {
    name: "John",
    text: "Great experience with your company. Highly recommended!",
    image: john,
  },
  {
    name: "Ananya",
    text: "I love your testimonial and services. They are amazing!",
    image: ananya,
  },
  {
    name: "John",
    text: "Great experience with your company. Highly recommended!",
    image: john,
  },
  {
    name: "Neha",
    text: "Outstanding services. Keep up the good work!",
    image: neha,
  },
];

const Testimonials = () => {
  return (
    <div className="main-testimonial">
      
      <div className="testimonials-container">
      <div className="about-heading">
          <h1>Testimonials</h1>
          <p>This is how people think <br /> and feel about our testimonials and services.</p>
        </div>

        
        <div className="outer_div" >

        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-description">
              <h3  >{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
