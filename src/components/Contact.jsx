import React from 'react';
import '../assets/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>For any inquiries, feel free to reach out to us:</p>
        <ul>
          <li><strong>Address:</strong> 123 Chembur Colony, Chembur, India</li>
          <li><strong>Phone:</strong> +1 234 567 890</li>
          <li><strong>Email:</strong> info@vesit.ac.in</li>
        </ul>
      </div>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
