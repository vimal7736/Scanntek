import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import IntelligenceApplication from '../components/IntelligenceApplication';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function RoutesPath() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntelligenceApplication />} />
          <Route path='/contact-us' element={<ContactUs />}  />
          <Route path="/about" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
