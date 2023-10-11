import "./App.css";
import loginContext from "./store/loginContext";
import { LoginPage } from "./Pages/LoginPage";
import { System } from "./Pages/System";
import { useState } from "react";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  return (
    <>
      <loginContext.Provider value={{ isUserLogged, setIsUserLogged }}>
        {isUserLogged === false ? <LoginPage /> : <System />}
      </loginContext.Provider>
    </>
  );
}

export default App;
