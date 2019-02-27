import React from 'react';
import './Video2.scss';

const Video2 = () => (
  <div className="Video2">
    <p>second method to add a video</p>
    <iframe
      title="video2" //it needs to add attribute title
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4bG17OYs-GA"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <iframe
      title="video3"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ByXuk9QqQkk"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default Video2;
