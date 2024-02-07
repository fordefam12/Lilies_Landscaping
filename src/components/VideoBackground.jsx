// VideoBackground.js
import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="lilies landscaping.webp" type= "image/webp"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
