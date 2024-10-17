import React, { useState, useEffect } from 'react';
import "../assets/home.css";

const Home = () => {
  // Array of image URLs for the slideshow
  const images = [
    "/homeimages/image1.jpg",
    "/homeimages/image2.jpg",
    "/homeimages/image3.jpg",
  ];

  const newsItems = [
    { id: 1, title: "Tech Symposium 2024" },
    { id: 2, title: "AI and Data Science Courses" },
    { id: 3, title: "Admissions Open for 2024 Batch" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Left Side: Slideshow */}
      <div className="slideshow-container">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="slideshow-image"
        />
      </div>

      {/* Right Side: Welcome and News */}
      <div className="right-content">
        <div className="hero-section">
          <h1>Welcome to Vivekanand Education Society's Institute of Technology</h1>
          <p>Shaping the future of young minds with excellence in education.</p>
          <button className="cta-button">Explore Our Programs</button>
        </div>

        <div className="news-section">
          <h2>Recent News</h2>
          <ul>
          {newsItems.map((news) => (
          <li key={news.id}>{news.title}</li> // "key" ensures unique identification
        ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
