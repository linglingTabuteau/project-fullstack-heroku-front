import React from 'react';
import YouTube from 'react-youtube';
import './Video.scss';

const Video = (props) => {
  const { videoId } = props;
  const opts = {
    playerVars: {
      // différente configuration de lecture, d'affichage, d'utilisation//
      autoplay: 0,
      rel: 0,
      showinfo: 0,
      modestbranding: 1,
    },
  };
  return (
    <div className="Video1">
      <p>first method to add video</p>
      <YouTube
        className="video-media"
        videoId={videoId} // Lien id de la video, pour inserer une video, tu peux trouver id sur url de video après v=
        opts={opts}
      />
    </div>
  );
};

export default Video;
