import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Login = () => {
  const loginUrl = "https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/login/new?source=share_login";
  const clienthub_id = "05e404a5-097b-465d-abf8-7f8496c3da02";
  const formUrl = "https://clienthub.getjobber.com/client_hubs/05e404a5-097b-465d-abf8-7f8496c3da02/public/work_request/embedded_work_request_form";

  useEffect(() => {
    // Script for Jobber Work Request Embed
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js";
    script.setAttribute("clienthub_id", clienthub_id);
    script.setAttribute("form_url", formUrl);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [clienthub_id, formUrl]);

  // State to manage button animation
  const [hovered, setHovered] = useState(false);

  // Spring animation for button
  const buttonAnimation = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="columns is-centered is-vcentered is-fullheight">
      <div className="column is-half">
        <div className="box has-background-white p-5">
          <h1 className="title is-2 has-text-dark has-text-centered">Login</h1>

          <p className="mb-4 has-text-centered">
          Request Your Free Quote {' '}
            <animated.span
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: 'inline-block',
                transform: buttonAnimation.scale.interpolate(scale => `scale(${scale})`),
                cursor: 'pointer',
                border: "solid #ddd",
              }}
            >
              Log in
            </animated.span>
            {' '} to your account!
            
            <a href={loginUrl} target="_blank" rel="noopener noreferrer">
              <animated.span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  display: 'inline-block',
                  transform: buttonAnimation.scale.interpolate(scale => `scale(${scale})`),
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                
              </animated.span>
            </a>
            
          </p>

          <div className="is-half has-text-centered">{/* Button from external source */}
          Don't have an account?{' '}
          <button
            data-aos="zoom-in"
            name="button"
            type="button"
            id={`work-request-button-${clienthub_id}`}
            className="button is-success is-half "
          >
              Sign up
          </button>
          here for free!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
