import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './OurPartners.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partner1 from '../assets/1.jpg';
import partner2 from '../assets/2.jpg';
import partner3 from '../assets/3.jpg';

const OurPartners = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partners = [
    { id: 1, logo: partner1, name: 'Partner 1' },
    { id: 2, logo: partner2, name: 'Partner 2' },
    { id: 3, logo: partner3, name: 'Partner 3' },
    // Add more partners here
  ];

  useEffect(() => {
    const images = partners.map(partner => new Image().src = partner.logo);
    Promise.all(images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })).then(() => {
      setImagesLoaded(true);
    }).catch(() => {
      console.error('Error loading images');
    });
  }, [partners]);

  return (
    <div className="our-partners">
      <h2>Our Partners</h2>
      {imagesLoaded ? (
        <Slider {...settings}>
          {partners.map(partner => (
            <div key={partner.id} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </Slider>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default OurPartners;
