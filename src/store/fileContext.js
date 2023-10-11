import React, { createContext } from 'react';

const FileContex = React.createContext({
  isFileClosed: false,
  setIsFileClosed: (closed) => {},
});

export default FileContex;
