import React from 'react';
import './About.css'; // Import a separate CSS file for additional styling
import 'bulma/css/bulma.min.css';
import Aimage from '../asstets/images/about image.webp';


const About = () => {
  return (
    <div className="about-container">
      <section className="section">
        <div className="container">
          <h2 className="title">Our Story</h2>
          <h3 className="title">About</h3>
          <p>
            Established in Houston in 2019
            </p> 
            <p>All services are provided by Lilies Landscape Team.</p>
            <p>Lilies Landscape provides excellent landscape services,
            guaranteeing your satisfaction with our leadership and expertise.
          </p>
          <img className="about-image" src={Aimage} alt="Lilies Landscape Team" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="title ">Mission</h3>
          <p>
          <p>Lilies takes pride in delivering quality landscape designs and solutions which are tailored to each customer’s preferences.</p>

          <p>We create beautiful, landscaped properties for both commercial and homeowner associations including trees, shrubs, flowers, perennials, irrigation, drainage systems and much more. Our customer-centered focus makes it easy for you to work with us, and we'll customize our solutions and approach to meet your landscaping needs. </p>

          <p>With over a decade of creating landscape solutions for properties, Lilies provides comprehensive landscape maintenance, landscape design/build and water management solutions for HOAs, office/retail and industrial customers, enabling us to serve all your landscaping needs.</p>

          <p>Lilies promises greater value by providing our services at competitive rates and guaranteeing your satisfaction with our leadership, service, and accountability. All the landscape services we offer at Lilies  are performed in-house and we see this as a real value to our clients.</p>

          <p>We feel this approach increases accountability and enhances relationships with our customers, who depend on our team to handle their landscaping needs. This differentiates our firm from other companies that may use subcontractors on your property. By physically managing all services, you can be sure every job is done right.</p>

          <p>Landscape maintenance retains the value of your property by taking safe care of the health of turf, trees, flowers, and the overall outdoor environment. Enhancements to the landscape ensure your HOA and commercial property stays relevant and attractive. </p>

          <p>We invite you to experience for yourself a partnership that so many other Houston property managers, owners and developers have come to trust. We guarantee your satisfaction. Contact us today for a free consultation.</p>
          </p>
          {/* ... (rest of the content) ... */}
        </div>
      </section>
    </div>
  );
};

export default About;
