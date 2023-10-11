import React, { useContext } from "react";
import { SettingsApps } from "./SettingsApps";
import { DarkMode } from "./DarkMode";
import { KeyboardBrightness } from "./KeyboardBrightness";
import { ScreenMirroring } from "./ScreenMirroring";
import SettingsContext from "../../store/SettingsContext";
import "./Settings.css";

export const Settings = () => {
  const settings = useContext(SettingsContext);
  return (
    <div
      className='settings-modal'
      style={{ scale: settings.isSettignsClosed === true ? "0" : "1" }}
    >
      <div className='settings-modal-top-wrapper'>
        <SettingsApps />
        <div className='right-bar-wrapper'>
          <DarkMode />
          <div className='settings-modal-bottom-wrapper'>
            <KeyboardBrightness />
            <ScreenMirroring />
          </div>
        </div>
      </div>
    </div>
  );
};
