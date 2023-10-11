import React from 'react';
import { SettingsAppsItem } from './SettingsAppsItem';
import WiFi from '../../images/wifi.svg';
import Bluetooth from '../../images/bluetooth.svg';
import AirDrop from '../../images/airdrop.svg';
import './SettingsApp.css';

export const SettingsApps = () => {
  return (
    <div className='settings-apps'>
      <SettingsAppsItem
        value='localhost'
        src={WiFi}
        header='Wi-Fi'
        valueTwo='Not connected'
      />
      <SettingsAppsItem
        value='On'
        src={Bluetooth}
        header='Bluetooth'
        valueTwo='Off'
      />
      <SettingsAppsItem
        value='Everyone'
        src={AirDrop}
        header='AirDrop'
        valueTwo='0ff'
      />
    </div>
  );
};
