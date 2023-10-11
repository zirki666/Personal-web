import React, { createContext } from 'react';

const ZIndexContext = React.createContext({
  fileIndex: false,
  setFileIndex: (num) => {},
  finderIndex: false,
  setFinderIndex: (num) => {},
  wallpaperIndex: false,
  setWallpaperIndex: (num) => {},
});

export default ZIndexContext;
