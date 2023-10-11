import React from 'react';

const wallpapersContext = React.createContext({
  wallpaper: '',
  setWallpaper: (wallpaper) => {},
  actualWallpaperName: '',
  setActualWallpaperName: (name) => {},
  isWallpaperClosed: true,
  setIsWallpaperClosed: (closed) => {},
});

export default wallpapersContext;
