import { createContext } from "react";
const loginContext = createContext({
  isUserLogged: false,
  setIsUserLogged: (logged) => {},
});
export default loginContext;
