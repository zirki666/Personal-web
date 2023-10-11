import React from "react";
import "./LoginPage.css";
import { Login } from "../components/Login/Login";
import { CancelLogin } from "../components/Login/CancelLogin";
import ButtonContext from "../store/buttonContext";
import IconContext from "../store/iconContext";
import useState from "react-usestateref";

export const LoginPage = () => {
  const [inputValue, setInputValue, inputRef] = useState("");
  const [iconState, setIconState] = useState(false);
  return (
    <ButtonContext.Provider value={{ inputValue, setInputValue, inputRef }}>
      <IconContext.Provider value={{ iconState, setIconState }}>
        <section className='login-page-container'>
          <Login />
          <CancelLogin />
        </section>
      </IconContext.Provider>
    </ButtonContext.Provider>
  );
};
