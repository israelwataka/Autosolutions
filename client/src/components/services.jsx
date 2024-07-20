import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('http://localhost:8080/api/services');
      const data = await response.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div className="serv-services">
      <div className="serv-container">
        <h2>Our Services</h2>
        <div className="serv-services-grid">
          {services.map(service => (
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
