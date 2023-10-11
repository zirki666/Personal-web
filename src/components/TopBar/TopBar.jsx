import React, { useEffect, useState, useContext } from "react";
import { format } from "date-fns";
import Logo from "../../images/appleLogo.png";
import Settings from "../../images/settings.svg";
import SettingsContext from "../../store/SettingsContext";
import AppleModalContext from "../../store/appleModalContext";
import "./TopBar.css";

export const TopBar = () => {
  const [time, setTime] = useState(new Date());
  const settings = useContext(SettingsContext);
  const appleContext = useContext(AppleModalContext);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className='top-bar-wrapper'>
      <div className='logo'>
        <img
          src={Logo}
          onClick={() => {
            setTimeout(() => {
              appleContext.setIsAppleClosed((prev) => !prev);
            }, 0);
          }}
          loading='lazy'
        ></img>
      </div>
      <div className='settings'>
        <img
          src={Settings}
          onClick={() => {
            setTimeout(() => {
              settings.setIsSettingsClosed(false);
            }, 0);
          }}
          loading='lazy'
        ></img>
        <p>{format(time, "EEE MMM dd K:mm aa")}</p>
      </div>
    </div>
  );
};
