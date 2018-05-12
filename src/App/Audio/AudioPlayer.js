import React from 'react';
import jediSteps from '../assets/23-The-Jedi-Steps-and-Finale.mp3';
// import farewell from '/Audio/22-Farewell-and-the-Trip.mp3';

const AudioPlayer = props => {
  return (
    <div>
      <audio className="mainAudio" autoPlay loop>
        {/*<source src={jediSteps}/>*/}
      </audio>
    </div>
  );
};

export default AudioPlayer;
