import React from 'react';
import './newsletter.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates and offers right in your inbox.</p>
      <div className="input-group">
        <input type="email" placeholder="Enter your email" />
        <button type="button">Subscribe</button>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
