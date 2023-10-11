import React, { createContext } from 'react';

const FolderContext = React.createContext({
  isClosed: false,
  setIsClosed: (closed) => {},
});

export default FolderContext;
