import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCheckCircle, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-container">
      <section className="hero is-primary" data-aos="fade-in">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2" data-aos="fade-right">LILIE'S LANDSCAPE LLC</h1>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <h3 className="title is-size-3">Your property is our business.</h3>
              <p>
                Lilies offers comprehensive commercial and residential landscape services. From planning and design to installation, management, and irrigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4" data-aos="zoom-in">
              <div className="box">
                <h3 className="title is-size-3">EXPERIENCED AND CREATIVE LANDSCAPERS</h3>
                <p>
                  We specialize in helping clients increase the value and appeal of their property by creating their dream outdoor space. We create beautiful landscape designs by combining seasonals, perennials, contemporary landscaping, and regular maintenance.
                </p>
                <p>
                  Our goal is to ensure that you are completely satisfied with the appeal of your property.
                </p>
              </div>
            </div>
            <div className="column is-4" data-aos="zoom-in">
              <div className="box">
                <h3 className="title is-size-3">WE CARE AND IT SHOWS</h3>
                <p>
                  We pay attention to the smallest details with each customer to ensure complete satisfaction. Our goal is to enhance your community, raise property values, and make your property beautiful.
                </p>
                <p>
                  We provide unmatched quality and service from the thought process to design all the way to the installation and maintenance of your property.
                </p>
              </div>
            </div>
            <div className="column is-4" data-aos="zoom-in">
              <div className="box">
                <h3 className="title is-size-4">SATISFACTION GUARANTEED</h3>
                <p>
                  Your satisfaction is our priority, and we strive to provide a service we are proud of.
                </p>
                <p>
                  We start every project off with a consultation to better understand your goals and needs.
                </p>
                <p>
                  Each project is completed according to your preferences. Let Lilies Landscaping earn your trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <div className="container">
          <h3 className="title">SERVICES</h3>
          <div className="columns is-centered">
            <div className="column is-4">
              <ul>
                <li className="is-size-4">Residential and HOA Maintenance</li>
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                <li className="is-size-4">Tree Trimming and Removal</li>
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                <li className="is-size-4">Commercial Landscape</li>
              </ul>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-6">
              <ul>
                <li className="is-size-4">Litter and Debris Removal</li>
              </ul>
            </div>
            <div className="column is-6">
              <ul>
                <li className="is-size-4">Landscape Design and Installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-info" data-aos="fade-up">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <p className="title is-size-1">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </p>
                <p className="title is-size-3">Fully Insured</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <p className="title is-size-1">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className="title is-size-3">Reliable & Trustworthy</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <p className="title is-size-1">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </p>
                <p className="title is-size-3">Professional & Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
