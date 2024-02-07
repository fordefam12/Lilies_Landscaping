import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCheckCircle, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import 'bulma/css/bulma.min.css';



const Home = () => {
  return (
    <div className="has-text-centered">
      <div className="home-container">
        <h2 className="title is-size-2">LILIE'S LANDSCAPE LLC</h2>
      </div>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <h3 className="title is-size-3">
                Your property is our business.
              </h3>
              <p>
                Lilies offers comprehensive commercial and residential landscape
                services. From planning and design to installation, management,
                and irrigation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-3">
            <div className="box has-background-primary">
              <h3 className="title is-size-3 has-text-white">
                EXPERIENCED AND CREATIVE LANDSCAPERS
              </h3>
              <p className="has-text-white">
                We specialize in helping clients increase the value and appeal
                of their property by creating their dream outdoor space. We
                create beautiful landscape designs by combining seasonals,
                perennials, contemporary landscaping, and regular maintenance.
              </p>
              <p className="has-text-white">
                Our goal is to ensure that you are completely satisfied with the
                appeal of your property.
              </p>
            </div>
          </div>
          <div className="column is-3">
            <div className="box has-background-link">
              <h3 className="title is-size-3 has-text-white">
                WE CARE AND IT SHOWS
              </h3>
              <p className="has-text-white">
                We pay attention to the smallest details with each customer to
                ensure complete satisfaction. Our goal is to enhance your
                community, raise property values, and make your property
                beautiful.
              </p>
              <p className="has-text-white">
                We provide unmatched quality and service from the thought
                process to design all the way to the installation and
                maintenance of your property.
              </p>
            </div>
          </div>
          <div className="column is-3">
            <div className="box has-background-success">
              <h3 className="title is-size-3 has-text-white">
                SATISFACTION GUARANTEED
              </h3>
              <p className="has-text-white">
                Your satisfaction is our priority, and we strive to provide a
                service we are proud of.
              </p>
              <p className="has-text-white">
                We start every project off with a consultation to better
                understand your goals and needs.
              </p>
              <p className="has-text-white">
                Each project is completed according to your preferences.
              </p>
              <p className="has-text-white">
                Let Lilies Landscaping earn your trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <h3 className="title">SERVICES</h3>
          <div className="columns is-centered">
            {/* First Row */}
            <div className="column is-4">
              <ul>
                <li className="is-size-4">Residential and HOA Maintenance</li>
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                <li className="is-size-3">Tree Trimming and Removal</li>
              </ul>
            </div>
            <div className="column is-4">
              <ul>
                <li className="is-size-3">Commercial Landscape</li>
              </ul>
            </div>
          </div>
          <div className="columns is-centered">
            {/* Second Row */}
            <div className="column is-6">
              <ul>
                <li className="is-size-3">Litter and Debris Removal</li>
              </ul>
            </div>
            <div className="column is-6">
              <ul>
                <li className="is-size-3">Landscape Design and Installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-warning">
  <div className="container">
    <div className="columns">
      <div className="column is-one-third">
        <div className="box">
          {/* Set the color using the style attribute */}
          <p className="title is-size-1" style={{ color: '#000' }}>
            <FontAwesomeIcon icon={faShieldAlt} />
          </p>
          <p className="title is-size-3">Fully Insured</p>
        </div>
      </div>
      <div className="column is-one-third box">
        {/* Set the color using the style attribute */}
        <p className="title is-size-1" style={{ color: '#000' }}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
        <p className="title is-size-3">Reliable & Trustworthy</p>
      </div>
      <div className="column is-one-third box">
        {/* Set the color using the style attribute */}
        <p className="title is-size-1" style={{ color: '#000' }}>
          <FontAwesomeIcon icon={faClipboardCheck} />
        </p>
        <p className="title is-size-3">Professional & Experienced</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
