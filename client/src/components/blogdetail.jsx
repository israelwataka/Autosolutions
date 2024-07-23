import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../blogData';
import './blogdetail.scss';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find(s => s.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail">
        <img src={blog.image} alt={blog.title} className="service-image" />
        <div className="service-info">
          <h2>{blog.title}</h2>
          <p>{blog.fullDescription}</p>
          <h3>{blog.titleB}</h3>
          <p>{blog.otherDesc}</p>
          <img src={blog.image} alt={blog.title} className="service-image" />
          <h3>{blog.titleC}</h3>
          <p>{blog.otherDescr}</p>
          <img src={blog.image} alt={blog.title} className="service-image" />
        </div>
      </div>
      <div className="service-sidebar">
        <h3>Our Blogs</h3>
        <ul>
          {blogData.map(s => (
            <li key={s.id}>
              <Link to={`/blogs/${s.id}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
