import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../assets/auto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      {showTopBar && (
        <div className="top-bar">
          <div className="contact-ifo">
            <a href="mailto:info@highwayautosolutions.com">
              <FontAwesomeIcon icon={faEnvelope} /> info@highwayautosolutions.com
            </a>
            <a href="tel:+254723880785">
              <FontAwesomeIcon icon={faPhone} /> +2547 23 880 785
            </a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      )}
      <div className="main-header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li className="dropdown">
              <a href="/pages">PAGES</a>
              <div className="dropdown-content">
                <a href="/about">About</a>
                <a href="/gallery">Gallery</a>
                <a href="/faqs">FAQs</a>
              </div>
            </li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/testimonials">TESTIMONIALS</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
