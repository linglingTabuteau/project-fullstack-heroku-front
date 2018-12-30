import React from 'react';
import './Video.scss';

const Video2 = () => {
  return (
    <div className="Video">
      <p>second method to add a video</p>
      <iframe
      title="video2" //it needs to add attribute title
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/4bG17OYs-GA" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
      <iframe
      title="video3"
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/ByXuk9QqQkk" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
    </div>
  );
}

export default Video2;