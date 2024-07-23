import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../blogData';
import './blog.scss';

const Blogs = () => {
  return (
    <div className="serv-services">
      <div className="serv-container">
        <h2>Blog</h2>
        <div className="serv-services-grid">
          {blogsData.map(blog =>blog (
            <div key={blog.id} className="serv-service-card">
              <img src={blog.image} alt={blogservice.title} />
              <div className="serv-service-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <Link to={`/blogs/${blog.id}`} className="serv-read-more">Read More &raquo;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
