import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.scss';

const Banner = ({ videoSrc }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const path = location.pathname;
    let title = '';

    switch (path) {
      case '/':
        title = 'Home';
        break;
      case '/about':
        title = 'About Us';
        break;
      case '/services':
        title = 'Our Services';
        break;
      case '/contact':
        title = 'CONTACT';
        break;
      case '/services/1':
        case '/services/2':
          case '/services/3':
        case '/services/4':
          case '/services/5':
        case '/services/6':
          case '/services/7':
        case '/services/8':
        title = 'services';
        break;
      // Add more cases for different routes
      default:
        title = 'YOU ARE LOST';
    }

    setPageTitle(title);
  }, [location.pathname]);

  return (
    <div className="banner">
      <video autoPlay loop muted className="video-background">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <h1>{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Banner;
