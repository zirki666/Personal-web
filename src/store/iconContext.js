import React, { createContext } from 'react';

const IconContext = React.createContext({
  iconState: false,
  setIconState: (icon) => {},
});

export default IconContext;
