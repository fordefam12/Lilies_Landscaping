// VideoBackground.js
import React from 'react';
import Video from '../asstets/images/IMG_1847.mp4';
import './VideoBackground.css'; // Import your CSS file

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-element">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-container"> 
      </div>
    </div>
  );
};

export default VideoBackground;
