import React, { createContext } from 'react';
const AppleModalContext = React.createContext({
  isAppleClosed: true,
  setIsAppleClosed: (input) => {},
});

export default AppleModalContext;
