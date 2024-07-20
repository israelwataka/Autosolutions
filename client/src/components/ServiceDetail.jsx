import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../servicesData';
import './ServiceDetail.scss';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail">
        <img src={service.image} alt={service.title} className="service-image" />
        <div className="service-info">
          <h2>{service.title}</h2>
          <p>{service.fullDescription}</p>
        </div>
      </div>
      <div className="service-sidebar">
        <h3>Our Services</h3>
        <ul>
          {servicesData.map(s => (
            <li key={s.id}>
              <Link to={`/services/${s.id}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetail;
