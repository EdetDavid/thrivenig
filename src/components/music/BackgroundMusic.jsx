import React, { useRef, useState } from 'react';
import './BackgroundMusic.css'; // Create a CSS file for additional styling

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} autoPlay loop />
      <div id="controls" className="controls">
        <button onClick={togglePlay} className="control-button">
          {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
        <button onClick={stopMusic} className="control-button">
          <i className="fas fa-stop"></i>
        </button>
      </div>
    </div>
  );
};

export default BackgroundMusic;
