import React from 'react';
import '../styles/pages.css';
import teleimg from '../assets/service.png'; // Adjust the path as necessary
import ITimg from '../assets/itsev.png'; // Adjust the path as necessary
import securityimg from '../assets/cctv2.png'; // Adjust the path as necessary
import automationimg from '../assets/automation.png'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faServer,
  faShieldAlt,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

function Services(){
    return(
        <div className="services-page">
            <h1 className="services-title">OUR SERVICES</h1>
            <div className="services-list">
                <div className="service-item">
                    <h2><FontAwesomeIcon icon={faPhoneAlt} /> TELECOMMUNICATION SERVICE</h2>
                    <img src={teleimg} alt="Telecommunication" className="service-image"/>
                    <p>The company provides advanced telecommunications solutions, including PBX and VoIP phone systems,
                         to optimize communication for enterprises of all sizes. These systems feature auto-attendants, 
                         call forwarding, and videoconferencing capabilities, 
                         enabling businesses to reduce costs while improving connectivity.
                          With a focus on reliability and innovation, Busybee ensures clients have access to cutting-edge
                           voice and data networks that support modern workplace demands.</p>
                </div>
                <div className="service-item">
                    <h2><FontAwesomeIcon icon={faServer} /> IT SERVICES</h2>
                    <img src={ITimg} alt="IT Services" className="service-image"/>
                    <p>Busybee Communication Technology delivers end-to-end IT solutions designed to enhance
                         efficiency and productivity for businesses, government agencies, and industrial clients. 
                         Their expertise includes ICT consultancy, structured cabling, and biometric systems, 
                         ensuring seamless integration of technology into daily operations. Additionally,
                          they offer professional website development to help clients build a strong digital presence, 
                          supported by scalable and secure IT infrastructure tailored to meet specific organizational 
                          needs.</p>
                </div>
                <div className="service-item">
                    <h2><FontAwesomeIcon icon={faShieldAlt} /> SECURITY SYSTEMS</h2>
                    <img src={securityimg} alt="Security Systems" className="service-image"/>
                    <p>Busybee specializes in comprehensive security solutions such as CCTV surveillance, 
                        intruder alarms, and door access control systems. Their high-resolution cameras, 
                        motion detection alerts, and biometric authentication (fingerprint, facial recognition) 
                        help safeguard properties against unauthorized access.
                         Tailored for commercial, residential, and government use, 
                         these systems provide real-time monitoring and instant alerts, 
                         ensuring robust protection for assets and personnel</p>
                </div>
                <div className="service-item">
                    <h2><FontAwesomeIcon icon={faRobot} /> AUTOMATION SERVICES</h2>
                    <img src={automationimg} alt="Automation Services" className="service-image"/>
                    <p>From electric gate automation to smart building and home systems,
                         Busybee offers innovative automation solutions that enhance convenience and security. 
                         Their services include installation of sliding/swing gate openers, 
                         fire alarms, and audio-visual systems, all designed to streamline operations and improve safety.
                          By leveraging the latest technology, the company helps clients automate critical processes, 
                          reducing manual intervention while maintaining high reliability.</p>
                </div>
            </div>
        </div>
    );
}
export default Services;