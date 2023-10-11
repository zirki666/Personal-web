import React from 'react';
import KeyboardBrightnessIcon from '../../images/keyboard-icon.svg';
import './KeyboardBrightness.css';
export const KeyboardBrightness = () => {
  return (
    <div className='keyboard-brightness'>
      <img src={KeyboardBrightnessIcon} loading="lazy"></img>
      <p>
        <span>Keyboard</span>
        <span>Brightness</span>
      </p>
    </div>
  );
};
