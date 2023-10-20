import React from "react";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Services from "../components/Services";
import IntelligenceApplication from "./IntelligenceApplication";
import Testimonials from "./Testimonials";


function Dashboard() {
  return (
    <div>
      <IntelligenceApplication />
      <AboutUs />
      <Products />
      <Services />
      <Testimonials  />
    
    </div>
  );
}

export default Dashboard;
