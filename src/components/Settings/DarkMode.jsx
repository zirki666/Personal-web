import React from 'react';
import { useState } from 'react';
import Moon from '../../images/moon.png';
import './DarkMode.css';
export const DarkMode = () => {
  const [mode, setMode] = useState(false);

  const modeHandler = () => {
    setMode((mode) => !mode);
    console.log(mode);
    mode === false
      ? document.querySelector('body').setAttribute('data-theme', 'dark')
      : document.querySelector('body').setAttribute('data-theme', 'light');
  };
  return (
    <div className='dark-mode'>
      <img src={Moon} onClick={modeHandler} loading="lazy"></img>
      <p>Dark mode</p>
    </div>
  );
};
