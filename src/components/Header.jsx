import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faTools, faStar, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../asstets/images/lilies landscaping.webp';
import './Header.css'; // Import a separate CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add the AOS styles

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the default duration (in milliseconds)
    });
  }, []);

  return (
    <header>
      <div className="logo-container" data-aos="fade-right">
        <Link to="/">
          <img src={Logo} alt="Lilies Landscaping Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <FontAwesomeIcon icon={faInfo} /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              <FontAwesomeIcon icon={faTools} /> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" activeClassName="active">
              <FontAwesomeIcon icon={faStar} /> Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </NavLink>
          </li>
          <li className="login-link">
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
