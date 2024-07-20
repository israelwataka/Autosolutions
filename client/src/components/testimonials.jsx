import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonials.scss';

const testimonials = [
  { id: 1, name: 'Sarah M', position: 'Rural Development Coordinator', testimonial: 'We entrusted Webmac with a complex borehole drilling project and they delivered beyond our expectations. Their team was knowledgeable, efficient, and committed to ensuring the highest quality standards. Highly recommend their services!' },
  { id: 2, name: 'Michael T', position: 'Chairman, GH Group', testimonial: 'From architectural design to building renovations, Webmac General Contractors Ltd. provided top-notch service and craftsmanship. Their ability to meet deadlines without compromising on quality was truly impressive.' },
  { id: 3, name: 'Gary Brent', position: 'Business Owner', testimonial: 'The software engineering and IT solutions provided by Webmac were a game changer for our business. Their seamless installation of electronics, appliances, and computer systems boosted our operational efficiency significantly.' },
  { id: 4, name: 'John Doe', position: 'CEO, Example Corp', testimonial: 'Webmac provided outstanding service and support during our project. Their attention to detail and commitment to excellence was evident throughout the process.' },
  { id: 5, name: 'Jane Smith', position: 'Marketing Director, Acme Inc.', testimonial: 'I was impressed with the professionalism and expertise demonstrated by Webmac. They exceeded our expectations and delivered a high-quality solution on time and within budget.' },
  { id: 6, name: 'Alex Johnson', position: 'Project Manager, BuildIt LLC', testimonial: 'Working with Webmac was a great experience. Their team was responsive, knowledgeable, and dedicated to delivering a successful project. I highly recommend their services.' },
  { id: 7, name: 'Emily Davis', position: 'Operations Manager, Innovate Ltd', testimonial: 'Webmac\'s innovative approach and technical expertise helped us overcome several challenges during our project. Their dedication to customer satisfaction is truly commendable.' },
  { id: 8, name: 'Chris Brown', position: 'CTO, Tech Solutions', testimonial: 'The Webmac team provided exceptional service and support throughout our project. Their technical expertise and attention to detail were instrumental in achieving our project goals.' },
  { id: 9, name: 'Natalie Williams', position: 'HR Manager, PeopleCo', testimonial: 'I highly recommend Webmac for their outstanding service and commitment to quality. Their team was professional, efficient, and a pleasure to work with.' },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="icon">
                <img src="/path-to-your-icon/icon.png" alt="icon" />
              </div>
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
            <div className="testimonial-content">
              <blockquote>{testimonial.testimonial}</blockquote>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
