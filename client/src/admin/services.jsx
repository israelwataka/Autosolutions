import React, { useState } from 'react';
import './services.scss'

const Admin = () => {
  const [serviceName, setServiceName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('service_name', serviceName);
    formData.append('short_description', shortDescription);
    formData.append('full_description', fullDescription);
    if (image) {
      formData.append('image', image);
    }

    const response = await fetch('http://localhost:5000/api/services', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Reset form
      setServiceName('');
      setShortDescription('');
      setFullDescription('');
      setImage(null);
    }
  };

  return (
    <div className="admin-form">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Service Name</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Short Description</label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Full Description</label>
          <textarea
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default Admin;
