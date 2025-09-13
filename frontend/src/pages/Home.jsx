import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import heroImage from '../assets/hero-image.png';
import service1 from '../assets/cabling 1.png';
import service2 from '../assets/IT.png';
import service3 from '../assets/cctv2.png';
import service4 from '../assets/automation.png';
import aboutImage from '../assets/about.png';

function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative IT Solutions for Modern Businesses</h1>
          <p>Reliable, secure, and cutting-edge technology services tailored to your needs</p>
          <div className="hero-buttons">
            <Link to="/services" className="primary-btn">
              Our Services <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="IT Solutions" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2 className="section-title">Our Featured Services</h2>
        <div className="preview-grid">
          <div className="preview-card">
            <img src={service1} alt="Telecommunication" />
            <h3>Telecommunication</h3>
            <p>Advanced PBX and VoIP systems for seamless business communication</p>
            <Link to="/services" className="service-link">
              Learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="preview-card">
            <img src={service2} alt="IT Services" />
            <h3>IT Services</h3>
            <p>End-to-end IT solutions including structured cabling and biometric systems</p>
            <Link to="/services" className="service-link">
              Learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="preview-card">
            <img src={service3} alt="Security Systems" />
            <h3>Security Systems</h3>
            <p>Comprehensive CCTV, intruder alarms, and access control solutions</p>
            <Link to="/services" className="service-link">
              Learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="preview-card">
            <img src={service4} alt="Automation" />
            <h3>Automation</h3>
            <p>Smart building and home automation for enhanced convenience</p>
            <Link to="/services" className="service-link">
              Learn more <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-content">
          <h2 className="section-title">Why Choose BusyBee?</h2>
          <p>With over 10 years of experience in the Tanzanian market, BusyBee Communication Technology has established itself as a trusted provider of innovative IT solutions.</p>
          <ul className="benefits-list">
            <li><span>✓</span> Highly skilled and certified technicians</li>
            <li><span>✓</span> Custom solutions tailored to your needs</li>
            <li><span>✓</span> 24/7 support and maintenance</li>
            <li><span>✓</span> Competitive pricing with no hidden costs</li>
          </ul>
          <Link to="/about" className="primary-btn">
            About Us <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Our Team" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"BusyBee transformed our office communication system with their professional PBX installation. The team was efficient and knowledgeable."</p>
            <div className="client-info">
              <h4>John Mwamba</h4>
              <p>CEO, ABC Corporation</p>
            </div>
          </div>
          <div className="testimonial">
            <p>"The security system installed by BusyBee has given us peace of mind with its reliable performance and excellent support."</p>
            <div className="client-info">
              <h4>Sarah Johnson</h4>
              <p>Director, XYZ School</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Upgrade Your Technology Solutions?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <Link to="/contact" className="primary-btn">
            Get Started <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <h3>Call Us</h3>
          <p>+255 123 456 789</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h3>Email Us</h3>
          <p>info@busybee.co.tz</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <h3>Visit Us</h3>
          <p>123 Tech Street, Dar es Salaam, Tanzania</p>
        </div>
      </section>
    </div>
  );
}

export default Home;