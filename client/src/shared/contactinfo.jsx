import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import './contactInfo.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-box">
        <div className="info-icon">
          <FaMapMarkerAlt />
        </div>
        <div className="info-text">
          <h3>Address</h3>
          <p>Wings Court, Mumias-Bungoma Road,<br />Bungoma, KE.</p>
        </div>
      </div>
      <div className="info-box">
        <div className="info-icon">
          <FaPhoneAlt />
        </div>
        <div className="info-text">
          <h3>Call Us</h3>
          <p>+2547 23 880 785<br />+2541 00 100 100</p>
        </div>
      </div>
      <div className="info-box">
        <div className="info-icon">
          <FaClock />
        </div>
        <div className="info-text">
          <h3>Working Hours</h3>
          <p>Monday-Saturday(9:00 AM - 6:00 PM)<br />Sunday: Off</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
