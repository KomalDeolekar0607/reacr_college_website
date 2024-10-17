import React from 'react';
import '../assets/about.css';

const About = ({image , title}) => {
  return (
    <div className="about-container">
      {/* Full-width Image Section */}
      <div className="about-image-container">
        <img
          src={image}
          alt="About VESIT College"
          className="about-image"
        />
      </div>

      {/* Text Section */}
      <div className="about-content">
        <h1>About {title}</h1>
        <p>
          {title} College has been a beacon of knowledge and a hub for academic excellence for over 50 years.
          We offer a wide range of programs that foster innovation, creativity, and holistic development.
          Our college is known for its world-class infrastructure, dedicated faculty, and student-centric programs.
        </p>
        <p>
          Our mission is to shape the future by empowering students with the skills they need to excel in a rapidly evolving world.
          We believe in nurturing talent, encouraging critical thinking, and preparing our students to be global leaders.
        </p>
      </div>
    </div>
  );
};

export default About;
