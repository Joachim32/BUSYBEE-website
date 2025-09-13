import React from "react";
import { Link } from "react-router-dom";
import '../styles/pages.css';
import aboutImage from '../assets/cabling 1.png';
import aboutImage2 from '../assets/cctv.png';

function About() {
    return (
        <div className="About">
            <h1 className="aboutus">About Us</h1>
            
            <div className="about-us-left">
                <img src={aboutImage} alt="about us" className="about-us-image"/> 
                <p className="about-us">
                    BusyBee Communication Technology is a Tanzanian based IT solutions
                    company dedicated to delivering cutting-edge, end-to-end technology services. From structured 
                    cabling to biometric and access control systems, CCTV, alarm systems, PBX communication, software 
                    solutions, and website development BusyBee provides reliable, secure, and innovative technologies 
                    tailored to both businesses and homes.
                </p>
            </div>
            
            <div className="about-us-right">
                <img src={aboutImage2} alt="about us" className="about-us-image2"/>  
                <p className="about-us">
                    Our mission is to help organizations overcome challenges,
                    boost productivity, and stay competitive through modern, cost-effective IT solutions. 
                    With a highly skilled team and strategic partnerships, we ensure every solution we deliver
                    is scalable, efficient, and future-ready.<br/> At BusyBee, we value excellence,
                    integrity, teamwork, and innovation, always aiming to exceed client expectations with quality
                    service and unmatched support.
                </p>
            </div>

            {/* Mission and Vision */}
            <div className="mission-vision">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>To be a leading provider of innovative and reliable technology
                        solutions in Tanzania and beyond, empowering businesses and individuals with 
                        cutting-edge ICT infrastructure that enhances security, productivity, and communication.</p>
                </div>

                <div className="vision">
                    <h2>Our Vision</h2>
                    <ol>
                        <li>To deliver end-to-end ICT solutions tailored to the unique needs of our clients, ranging 
                            from PABX systems and biometric access control to CCTV, 
                            alarm systems, and software development.</li>
                        <li>To integrate advanced technologies through strategic planning, expert 
                            consultation, and skilled implementation</li>
                    </ol>
                </div>
            </div>

            {/* Core Values */}
            <div className="core-values">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h3>Excellence</h3>
                        <p>We deliver top-quality solutions that exceed expectations.</p>
                    </div>
                    <div className="value-item">
                        <h3>Integrity</h3>
                        <p>Honest and ethical in all our business dealings.</p>
                    </div>
                    <div className="value-item">
                        <h3>Innovation</h3>
                        <p>Constantly evolving to provide cutting-edge solutions.</p>
                    </div>
                    <div className="value-item">
                        <h3>Customer Focus</h3>
                        <p>Your needs are at the center of everything we do.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
                <h2>Ready to Transform Your Business?</h2>
                <p>Contact us today to discuss how we can help with your IT needs.</p>
                <Link to="/contact" className="cta-button">Get in Touch</Link>
            </div>
        </div>
    );
}

export default About;