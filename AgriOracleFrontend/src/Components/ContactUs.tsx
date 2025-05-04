import React, { useState } from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send formData to a backend or show a success message)
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-grid">
        {/* Form Section */}
        <div className="contact-form">
          <h2 className="form-title">Have Questions?</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-details">
              <h3>Phone</h3>
              <p>+91 XXXXXXXXXX</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div className="info-details">
              <h3>Email</h3>
              <p>agrioracle@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h3>Address</h3>
              <p>VIPS-TC, Pitampura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
