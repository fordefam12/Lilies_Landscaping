import React, { useEffect } from "react";
import "bulma/css/bulma.min.css"; // Import Bulma styles
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import QRcode from '../asstets/images/qr-code (18).png';


const Contact = () => {
  const clienthub_id = "05e404a5-097b-465d-abf8-7f8496c3da02";
  const formUrl =
    "https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/public/work_request/embedded_work_request_form";

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Script for Jobber Work Request Embed
    const script = document.createElement("script");
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js";
    script.setAttribute("clienthub_id", clienthub_id);
    script.setAttribute("form_url", formUrl);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [clienthub_id, formUrl]);

  return (
    <div className="columns is-centered">
      <div className="column is-half has-text-centered">
        <h2 className="title is-2" data-aos="fade-up">
          Contact Lilie's Landscaping
        </h2>
        <img
          src={QRcode}
          alt="QR Code"
          data-aos="zoom-in"
          style={{ marginTop: "10px", maxWidth: "80%" }}
        />
        {/* Button from external source */}
        <button
          data-aos="zoom-in"
          name="button"
          type="button"
          id={`work-request-button-${clienthub_id}`}
          className="button is-success has-text-danger-dark"
        >
          Request Your Free Quote
        </button>
      </div>
    </div>
  );
};

export default Contact;
