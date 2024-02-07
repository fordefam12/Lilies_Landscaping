import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import a separate CSS file for styling
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <h1>Get Started today!</h1> Contact us now!
        </p>
        <div className="columns is-centered">
          <div className="column is-size-3">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </div>
          <div className="column is-size-3">
            <a href="https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/public/work_request/new?source=social_media" className="jobber">
              <FontAwesomeIcon icon={faClipboardList} className='jobber-icon' />
            </a>
          </div>
          <div className="column is-size-3">
            <FontAwesomeIcon icon={faYelp} className="social-icon" />
          </div>
        </div>
        <p>
          12015 Osage Park Dr <br />
          Houston, Texas 77065
        </p>
        <p>
          <a href="mailto:lavila@liliesdidit.com">lavila@liliesdidit.com</a>
        </p>
        <p>
          832-883-9177
        </p>
        <p>
          &copy; 2023 Lilies did it
        </p>
        <p>
          Powered by <a href="your-jobber-link" target="_blank" rel="noopener noreferrer">Jobber</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;