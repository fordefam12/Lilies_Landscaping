import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faTools, faStar, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faInfo} /> About</Link></li>
          <li><Link to="/services"><FontAwesomeIcon icon={faTools} /> Services</Link></li>
          <li><Link to="/testimonials"><FontAwesomeIcon icon={faStar} /> Testimonials</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
          <li className="login-link"><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
