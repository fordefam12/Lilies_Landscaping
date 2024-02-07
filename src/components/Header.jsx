import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../asstets/images/lilies landscaping.webp';
import './Header.css'; // Import a separate CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Lilies Landscaping Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="login-link"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
