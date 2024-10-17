import React from "react";
import "../assets/departments.css"; // CSS file for styling the departments page

const Departments = () => {
  return (
    <div className="departments-container">
      <div className="departments-content">
        <div className="text-section">
          <h2>Our Departments</h2>
          <p>
            Vivekanand Education Society's Institute of Technology College offers a wide range of departments that cater to diverse academic fields. Whether you are interested in Engineering, Science, Arts, or Commerce, we provide state-of-the-art facilities and experienced faculty to guide you.
          </p>
          <ul>
            <li>Department of Computer Science</li>
            <li>Department of Information Technology</li>
            <li>Department of Electronics</li>
            <li>Department of Civil Engineering</li>
            <li>Department of Artificial Intelligence and Data Science</li>
          </ul>
        </div>

        <div className="image-section">
          <img src="depart1.jpg" alt="College Departments" />
        </div>
      </div>
    </div>
  );
};

export default Departments;
