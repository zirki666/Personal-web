import React from 'react';
import ScreenMirroringIcon from '../../images/screen-mirroring.svg';
import './ScreenMirroring.css';

export const ScreenMirroring = () => {
  return (
    <div className='screen-mirroring'>
      <img src={ScreenMirroringIcon} loading="lazy"></img>
      <p>
        <span>Screen</span>
        <span>Mirroring</span>
      </p>
    </div>
  );
};
