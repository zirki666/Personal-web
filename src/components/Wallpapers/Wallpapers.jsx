import React, { useContext, useRef } from "react";
import { WallpapersIcons } from "./WallpapersIcons";
import { WallpapersItems } from "./WallpapersItems";
import { useDraggable } from "@neodrag/react";
import wallpapersContext from "../../store/wallpapersContext";
import ZIndexContext from "../../store/zIndexContext";
import desert from "../../images/wallpapers/desert.webp";
import bigSurGraphic from "../../images/wallpapers/big-sur-graphic.webp";
import peak from "../../images/wallpapers/peak.webp";
import iridescence from "../../images/wallpapers/iridescence.webp";
import lake from "../../images/wallpapers/lake.webp";
import monterey from "../../images/wallpapers/monterey.webp";
import dome from "../../images/wallpapers/dome.webp";
import childhoodInnocence from "../../images/wallpapers/childhood-innocence.webp";
import solarGrad from "../../images/wallpapers/solar-grad.webp";
import diamond from "../../images/wallpapers/blood-diamond.webp";
import somberForest from "../../images/wallpapers/somber-forest.webp";
import loneDuneWolf from "../../images/wallpapers/lone-dune-wolf.webp";

import "./Wallpapers.css";
export const Wallpapers = () => {
  const wallpaper = useContext(wallpapersContext);
  const zIndex = useContext(ZIndexContext);
  const draggableRef = useRef(null);
  const wallpapers = [
    {
      src: bigSurGraphic,
      name: "Big Sur Graphic",
      key: 331231355666,
    },
    {
      src: desert,
      name: "The Desert",
      key: 1333131333,
    },
    {
      src: peak,
      name: "Peak",
      key: 133313123,
    },
    {
      src: iridescence,
      name: "Iridescence",
      key: 1333132133,
    },
    {
      src: lake,
      name: "Lake",
      key: 6333,
    },
    {
      src: monterey,
      name: "Monterey",
      key: 4333,
    },
    {
      src: dome,
      name: "Dome",
      key: 133313131,
    },
  ];
  const standalone = [
    {
      src: childhoodInnocence,
      name: "Childhood Innocence",
      key: 13233,
    },
    {
      src: diamond,
      name: "Blood Diamond",
      key: 1334,
    },
    {
      src: solarGrad,
      name: "Solar Grad",
      key: 1323,
    },
    {
      src: somberForest,
      name: "Somber Forest",
      key: 133,
    },
    {
      src: loneDuneWolf,
      name: "Lone Dune Wolf",
      key: 1333,
    },
  ];
  useDraggable(draggableRef, { bounds: "body" });
  return (
    <div
      className='wallpapers-container'
      ref={draggableRef}
      style={{
        scale: wallpaper.isWallpaperClosed === false ? "1" : "0",
        zIndex: zIndex.wallpaperIndex === true ? "2" : "1",
        transition: "scale 0.5s ease",
      }}
      onClick={() => {
        zIndex.setWallpaperIndex(true);
        zIndex.setFileIndex(false);
        zIndex.setFinderIndex(false);
      }}
    >
      <div className='wallpapers-header'>
        <WallpapersIcons />
        <p>Wallpapers</p>
      </div>
      <div className='actual-wallpaper'>
        <div className='actual-wallpaper-items-container'>
          <div
            className='actual-img'
            style={{ backgroundImage: `url( ${wallpaper.wallpaper})` }}
          ></div>
          <div className='actual-name'>
            <p>{wallpaper.actualWallpaperName}</p>
          </div>
        </div>
      </div>
      <div className='wallpapers-items'>
        <div className='dynamic-wallpapers'>
          {wallpapers.map((el) => (
            <WallpapersItems name={el.name} src={el.src} key={el.key} />
          ))}
        </div>
        <div className='standalone-wallpapers'>
          {standalone.map((el) => (
            <WallpapersItems name={el.name} src={el.src} key={el.key} />
          ))}
        </div>
      </div>
    </div>
  );
};
