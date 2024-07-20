import React from 'react';
import './contact.scss';
import { FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import OurPartners from '../shared/OurPartners'
import ContactInfo from '../shared/contactinfo';

const ContactUs = () => {
  return (
      <div className="contact-us">
      <div className="contact-container">
        <div className="info-section">
          <h2>Quick Contact Info</h2>
          <div className="info-item">
            <FaClock />
            <p>Opening Hour<br/>Mon - Fri, 8:00 A.M - 6:00 P.M</p>
          </div>
          <div className="info-item">
            <FaPhone />
            <p>Call Us<br/>+2547 23 880 785 / +254 100 100 100</p>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <p>Email<br/>info@highwayautosolutions.com</p>
          </div>
        </div>
        <div className="form-container">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Your Email" />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Message"></textarea>

          <div className="recaptcha-container">
            <ReCAPTCHA sitekey="your-site-key" />
          </div>

          <button type="button">Send Message</button>
        </div>
      </div>
      <>
      <OurPartners/>
      </>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8240098595835!2d34.5561498!3d0.5548281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781d53e096b897b%3A0x60e7908658cd10fc!2sHIGHWAY%20AUTO%20SOLUTIONS!5e0!3m2!1sen!2ske!4v1633644080747!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Highway Auto Solutions Location">
        </iframe>
      </div>
      <>
        <ContactInfo/>
        </>
    </div>
  );
};

export default ContactUs;
