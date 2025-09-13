import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Adjust path as needed
import Home from './pages/Home'; // Your Home component
import About from './pages/About'; // Your About component
import Services from './pages/Services'; // Your Services component
import Contact from './components/Contact'; // Your Contact component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;