import React from 'react';
import 'bulma/css/bulma.min.css'; // Import Bulma CSS for styling

const Testimonials = () => {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">Testimonials - Lilie's Landscaping</h1>
          <div className="columns is-multiline">
            {/* Testimonial 1 */}
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4">Happy Customer 1</p>
                  <p className="subtitle is-6">Residential Client</p>
                  <p>
                    "Lilie's Landscaping transformed my backyard into a beautiful oasis. Their attention to detail and creativity exceeded my expectations."
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4">Satisfied Customer 2</p>
                  <p className="subtitle is-6">Commercial Client</p>
                  <p>
                    "We hired Lilie's for our commercial landscaping needs, and their professionalism and commitment to quality are unmatched. Highly recommend!"
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title is-4">Impressed Client 3</p>
                  <p className="subtitle is-6">HOA Representative</p>
                  <p>
                    "Lilie's Landscaping has been maintaining our community's landscape for years. Their expertise and reliability make them a valuable partner."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

