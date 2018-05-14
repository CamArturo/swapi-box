import React from 'react';
import loading from '../../../assets/darth-vader.mp4';

const Loading = props => {
  return (
    <video src={loading} width="100%" height="100%" autoPlay loop/>
  );
};

export default Loading;
