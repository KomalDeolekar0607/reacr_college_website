import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/vesitlogo.jpg'; // Correct import for image
// import "../assets/navbar.css";
import "../assets/style.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="College Logo" className="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
