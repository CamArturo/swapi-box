import React from 'react';
import jediSteps from '../../../assets/23-The-Jedi-Steps-and-Finale.mp3';

const AudioPlayer = () => {
  return (
    <audio className="mainAudio" controls autoPlay>
      <source src={jediSteps} type="audio/mp3"/>
    </audio>
  );
};

export default AudioPlayer;