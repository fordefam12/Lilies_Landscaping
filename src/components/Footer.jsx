import React from 'react';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faYelp, 
  faInstagram, 
  faGoogle, 
  faAngellist, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import a separate CSS file for styling
import { faClipboardList, faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-centered is-multiline">
          <div className="column is-2">
            <h1 className="title is-size-4">Get Started today!</h1>
            <p>Contact us now!</p>
            <div className="social-icons is-size-4">
            <a href="https://www.facebook.com/liliesdidit/" className="fb">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" /></a>
              <a href="https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/public/work_request/new?source=social_media" className="jobber">
                <FontAwesomeIcon icon={faClipboardList} className="jobber-icon" />
              </a>
              <a href="https://www.yelp.com/biz/lilies-landscaping-houston" className="yelp">
              <FontAwesomeIcon icon={faYelp} className="social-icon" /></a>
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              <a href="http://www.liliesdidit.com" className="google">
              <FontAwesomeIcon icon={faGoogle} className="social-icon" /></a>
              <FontAwesomeIcon icon={faAngellist} className="social-icon" />
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </div>
          </div>
          <div className="column is-4">
            <p>
              12015 Osage Park Dr <br />
              Houston, Texas 77065
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} /> 832-883-9177
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:lavila@liliesdidit.com">lavila@liliesdidit.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Find us on the map
            </p>
          </div>
          <div className="column is-6 has-text-centered">
            <p>&copy; 2023 Lilies did it | Powered by <a href="https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/work_requests" target="_blank" rel="noopener noreferrer">Jobber</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
