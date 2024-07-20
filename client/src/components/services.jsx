import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../servicesData';
import './Services.scss';

const Services = () => {
  return (
    <div className="serv-services">
      <div className="serv-container">
        <h2>Our Services</h2>
        <div className="serv-services-grid">
          {servicesData.map(service => (
            <div key={service.id} className="serv-service-card">
              <img src={service.image} alt={service.title} />
              <div className="serv-service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/services/${service.id}`} className="serv-read-more">Read More &raquo;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
