import { createContext } from 'react';
const SettingsContext = createContext({
  isSettignsClosed: false,
  setIsSettingsClosed: (closed) => {},
});
export default SettingsContext;
