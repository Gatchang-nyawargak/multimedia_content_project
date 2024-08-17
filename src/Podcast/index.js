import React from 'react';
import './index.css';

const Podcast = () => {
  return (
    <div className="container">
      <div className="main">
        <div>
          <img src='./Images/microphone.png' alt='mike' className='mike'/>
        </div>
        <div>
          <p className='podcast-section'>
            <span className='podcast'>Podcast </span><br />
            <span className='play'>
              Freedom in Relationships: Beyond Tradition and Constraint
            </span>
          </p>
          <p className='play'>Episode One</p>
          <audio controls className='audio-player'>
            <source src="./Freedom in Relationships Beyond Tradition and Constrain.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
