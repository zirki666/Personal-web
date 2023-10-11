import React from "react";
import { useContext } from "react";
import AppleModalContext from "../../store/appleModalContext";
import "./AppleModal.css";
export const AppleModal = () => {
  const appleContext = useContext(AppleModalContext);
  return (
    <>
      {!appleContext.isAppleClosed && (
        <div className='apple-modal'>
          <ul>
            <li>About This Mac</li>
            <div className='devider'></div>
            <li>System Preferences...</li>
            <li>App Store...</li>
            <div className='devider'></div>
            <li>Recent Items</li>
            <div className='devider'></div>
            <li>Force Quit</li>
            <div className='devider'></div>
            <li>Sleep</li>
            <li>Restart...</li>
            <li>Shut Down...</li>
            <div className='devider'></div>
            <li>Lock Screen</li>
            <li>Log Out User...</li>
          </ul>
        </div>
      )}
    </>
  );
};
