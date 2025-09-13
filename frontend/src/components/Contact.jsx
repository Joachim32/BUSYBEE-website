import React, { useState } from 'react';
import '../styles/pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faSpinner,
  faPaperPlane,
  faWifi
} from '@fortawesome/free-solid-svg-icons';
import mapImage from '../assets/map.png';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) return;
  
  setIsSubmitting(true);
  setSubmitStatus(null);
  
  try {
    console.log('🌐 Sending to:', '/api/contact');
    console.log('📦 Data:', formData);
    
    // Use relative path - Vite will proxy to backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('📨 Response status:', response.status);
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('❌ Server returned non-JSON response:', text);
      throw new Error('Server returned HTML instead of JSON');
    }

    const data = await response.json();
    console.log('📨 Response data:', data);

    if (response.ok && data.success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      throw new Error(data.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('❌ Submission error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you! Reach out for inquiries, quotes, or support.</p>
        </div>
      </section>

      {/* Contact Main Section */}
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          <p className="contact-description">
            Have questions about our services or need technical support? 
            Our team is ready to assist you with all your IT needs.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+255 123 456 789</p>
                <p>+255 987 654 321</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@busybee.co.tz</p>
                <p>support@busybee.co.tz</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>123 Tech Street</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="contact-details">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2 className="section-title">Send Us a Message</h2>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="alert success">
              <FontAwesomeIcon icon={faCheckCircle} />
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert error">
              <FontAwesomeIcon icon={faExclamationCircle} />
              Oops! Something went wrong. Please try again later.
            </div>
          )}
          {submitStatus === 'network-error' && (
            <div className="alert warning">
              <FontAwesomeIcon icon={faWifi} />
              Network issue detected. Please check your connection.
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="error-message">
                  <FontAwesomeIcon icon={faExclamationTriangle} /> {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="error-message">
                  <FontAwesomeIcon icon={faExclamationTriangle} /> {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                <option value="telecommunication">Telecommunication</option>
                <option value="it-services">IT Services</option>
                <option value="security">Security Systems</option>
                <option value="automation">Automation Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <span className="error-message">
                  <FontAwesomeIcon icon={faExclamationTriangle} /> {errors.message}
                </span>
              )}
            </div>

            {/* reCAPTCHA (uncomment when configured) */}
            {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_KEY}></div> */}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2 className="section-title">Our Location</h2>
        <div className="map-container">
          <img src={mapImage} alt="Our Location" className="map-image" />
          {/* Alternative: Embedded Google Map */}
          {/* <iframe
            src={`https://www.google.com/maps/embed?pb=...`}
            allowFullScreen
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;