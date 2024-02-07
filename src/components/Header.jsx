import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/lilies landscaping.webp';




const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Lilies Landscaping Logo" />
      <h1>Lilie's Landscaping</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
