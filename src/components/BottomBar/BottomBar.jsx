import React, { useContext } from "react";
import finderLogo from "../../images/Finder.png";
import githubLogo from "../../images/github.png";
import terminalLogo from "../../images/terminal.png";
import wallpaperLogo from "../../images/wallpaper.png";
import wallpapersContext from "../../store/wallpapersContext";
import FolderContext from "../../store/folderContext";
import "./BottomBar.css";

export const BottomBar = () => {
  const wallpaper = useContext(wallpapersContext);
  const closed = useContext(FolderContext);
  const routeChange = () => {
    window.open(`https://github.com/zirki666`);
  };
  return (
    <div className='bottom-bar'>
      <div className='logo'>
        <p>Finder</p>
        <img
          src={finderLogo}
          alt='logo'
          onClick={() => {
            closed.setIsClosed(false);
          }}
        ></img>
      </div>
      <div className='logo'>
        <p>Github</p>
        <img src={githubLogo} alt='logo' onClick={routeChange}></img>
      </div>
      <div className='logo'>
        <p>Terminal</p>
        <img src={terminalLogo} alt='logo'></img>
      </div>
      <div className='logo'>
        <p>Wallpaper</p>
        <img
          src={wallpaperLogo}
          alt='logo'
          onClick={() => {
            wallpaper.setIsWallpaperClosed(false);
          }}
        ></img>
      </div>
    </div>
  );
};
