import React, { useState } from 'react';
import './SettingsAppsItem.css';
export const SettingsAppsItem = (props) => {
  const [isSelected, setIsSelected] = useState(true);
  const imgStyles = {
    backgroundColor:
      isSelected === true ? '#1a6dc4' : 'rgb(255, 255, 255, 0.5)',
  };
  return (
    <div className='settings-apps-item'>
      <div className='settings-apps-item-header'>
        <img
          src={props.src}
          style={imgStyles}
          onClick={() => {
            setIsSelected((prev) => !prev);
          }}
          loading="lazy"
        ></img>
        <div className='info'>
          <p className='header-text'>{props.header}</p>
          <p>{isSelected === true ? props.value : props.valueTwo}</p>
        </div>
      </div>
    </div>
  );
};
