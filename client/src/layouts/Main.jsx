import React from "react";
import {Routes, Route, Navigate } from 'react-router-dom';
// import Home from "../components/home";
import ContactUs from "../components/contact";
// import Testimonials from "../components/testimonials";
// import Services from "../components/services"
// import ServiceDetail from "../components/ServiceDetail";
import Banner from "../shared/banner";
// import AdminService from "../admin/services";
// import AdminLogin from "../admin/login";
import backgroundVideo from '../assets/background.mp4';

const Main = () => {
      return (
      <div className="mainContent">
        <Banner videoSrc={backgroundVideo} />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="services/:id" element={<ServiceDetail />} /> */}
          <Route path="/contact" element={<ContactUs/>}/>
          {/* <Route path="contacts" element={<Testimonials/>}/>
          <Route path="admin/services" element={<AdminService/>}/>
          <Route path="admin/login" element={<AdminLogin/>}/> */}
        </Routes>
      </div>
    );
  };
  
  export default Main;
  