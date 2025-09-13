import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo2.png';
import '../styles/navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="leftside">
                <img src={logo} alt="company logo" className="logo" />
            </div>
            <div className="rightside">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;