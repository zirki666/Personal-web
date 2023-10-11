import React, { useState, useEffect } from "react";
import { TopBar } from "../components/TopBar/TopBar";
import { BottomBar } from "../components/BottomBar/BottomBar";
import { Folder } from "../components/Folder/Folder";
import { Finder } from "../components/Finder/Finder";
import { File } from "../components/File/File";
import { Wallpapers } from "../components/Wallpapers/Wallpapers";
import { Settings } from "../components/Settings/Settings";
import { AppleModal } from "../components/AppleModal/AppleModal";
import Loading from "./Loading";
import FolderContext from "../store/folderContext";
import FileContex from "../store/fileContext";
import SettingsContext from "../store/SettingsContext";
import ZindexContext from "../store/zIndexContext";
import wallpapersContext from "../store/wallpapersContext";
import AppleModalContext from "../store/appleModalContext";
import finderLogo from "../images/Finder.png";
import githubLogo from "../images/github.png";
import terminalLogo from "../images/terminal.png";
import wallpaperLogo from "../images/wallpaper.png";
import desert from "../images/wallpapers/desert.webp";
import bigSurGraphic from "../images/wallpapers/big-sur-graphic.webp";
import peak from "../images/wallpapers/peak.webp";
import iridescence from "../images/wallpapers/iridescence.webp";
import lake from "../images/wallpapers/lake.webp";
import monterey from "../images/wallpapers/monterey.webp";
import dome from "../images/wallpapers/dome.webp";
import childhoodInnocence from "../images/wallpapers/childhood-innocence.webp";
import solarGrad from "../images/wallpapers/solar-grad.webp";
import diamond from "../images/wallpapers/blood-diamond.webp";
import somberForest from "../images/wallpapers/somber-forest.webp";
import loneDuneWolf from "../images/wallpapers/lone-dune-wolf.webp";
import "./System.css";

export const System = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isFileClosed, setIsFileClosed] = useState(true);
  const [finderIndex, setFinderIndex] = useState(false);
  const [fileIndex, setFileIndex] = useState(false);
  const [wallpaperIndex, setWallpaperIndex] = useState(false);
  const [wallpaper, setWallpaper] = useState(diamond);
  const [actualWallpaperName, setActualWallpaperName] =
    useState("Blood Diamond");
  const [isWallpaperClosed, setIsWallpaperClosed] = useState(true);
  const [isSettignsClosed, setIsSettingsClosed] = useState(true);
  const [isAppleClosed, setIsAppleClosed] = useState(true);
  const [isImgsLoaded, setIsImgsLoaded] = useState(false);

  const IMAGES = [
    {
      url: diamond,
    },
    {
      url: wallpaperLogo,
    },
    {
      url: terminalLogo,
    },
    {
      url: githubLogo,
    },
    {
      url: finderLogo,
    },
    {
      url: bigSurGraphic,
    },
    {
      url: desert,
    },
    {
      url: peak,
    },
    {
      url: iridescence,
    },
    {
      url: lake,
    },
    {
      url: monterey,
    },

    {
      url: dome,
    },

    {
      url: childhoodInnocence,
    },
    {
      url: solarGrad,
    },
    {
      url: somberForest,
    },
    {
      url: loneDuneWolf,
    },
  ];
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setIsImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      {isImgsLoaded === false ? (
        <Loading />
      ) : (
        <AppleModalContext.Provider value={{ isAppleClosed, setIsAppleClosed }}>
          <SettingsContext.Provider
            value={{ isSettignsClosed, setIsSettingsClosed }}
          >
            <wallpapersContext.Provider
              value={{
                wallpaper,
                setWallpaper,
                actualWallpaperName,
                setActualWallpaperName,
                isWallpaperClosed,
                setIsWallpaperClosed,
              }}
            >
              <main
                style={{ backgroundImage: `url( ${wallpaper})` }}
                onClick={() => {
                  setIsSettingsClosed(true);
                  setIsAppleClosed(true);
                }}
              >
                <TopBar />
                <div>
                  <FolderContext.Provider
                    value={{
                      isClosed,
                      setIsClosed,
                    }}
                  >
                    <ZindexContext.Provider
                      value={{
                        fileIndex,
                        finderIndex,
                        setFinderIndex,
                        setFileIndex,
                        wallpaperIndex,
                        setWallpaperIndex,
                      }}
                    >
                      <FileContex.Provider
                        value={{ isFileClosed, setIsFileClosed }}
                      >
                        <Wallpapers />
                        <Folder />
                        <Finder />
                        <File />
                      </FileContex.Provider>
                    </ZindexContext.Provider>
                    <div className='bottom-wrapper'>
                      <BottomBar />
                    </div>
                  </FolderContext.Provider>
                </div>
              </main>
            </wallpapersContext.Provider>
            <Settings />
          </SettingsContext.Provider>
          <AppleModal />
        </AppleModalContext.Provider>
      )}
    </>
  );
};
