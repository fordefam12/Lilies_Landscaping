import React, { useEffect } from "react";

const Contact = () => {
  const clienthub_id = "05e404a5-097b-465d-abf8-7f8496c3da02";
  const formUrl =
    "https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/public/work_request/embedded_work_request_form";

  useEffect(() => {
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
    <div>
      <h2>Contact Lilie's Landscaping</h2>

      {/* Button from external source */}
      <button
        name="button"
        type="button"
        id={`work-request-button-${clienthub_id}`}
        style={{
          display: "inline-flex",
          color: "#ff9999",
          backgroundColor: "#42A341",
          // ... other styles
        }}
      >
        Request Your Free Quote
      </button>
    </div>
  );
};

export default Contact;
