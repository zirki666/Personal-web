import React, { useContext } from "react";
import wallpapersContext from "../../store/wallpapersContext";
import "./WallpapersItems.css";
export const WallpapersItems = (props) => {
  const wlp = useContext(wallpapersContext);
  return (
    <div className='wallpaper-item'>
      <img
        src={props.src}
        onClick={() => {
          wlp.setWallpaper(props.src);
          wlp.setActualWallpaperName(props.name);
        }}
        loading='lazy'
      ></img>

      <p>{props.name}</p>
    </div>
  );
};
