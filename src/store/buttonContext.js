import React, { createContext } from 'react';

const ButtonContext = React.createContext({
  inputValue: '',
  setInputValue: (input) => {},
  inputRef: '',
});

export default ButtonContext;
