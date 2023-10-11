import React from "react";
import "./Login.css";
import avatar from "../../images/avatar.png";
import arrowRight from "../../images/arrow-right-solid.svg";
import { useContext } from "react";
import ButtonContext from "../../store/buttonContext";
import IconContext from "../../store/iconContext";
import loginContext from "../../store/loginContext";
export const Login = () => {
  const ctx = useContext(ButtonContext);
  const icon = useContext(IconContext);
  const login = useContext(loginContext);
  const inputHandler = (e) => {
    ctx.setInputValue(e.target.value);
    ctx.inputRef.current.trim().length > 0
      ? icon.setIconState(true)
      : icon.setIconState(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login.setIsUserLogged(true);
    }
  };
  return (
    <div className='login'>
      <img src={avatar} alt='avatar' loading='lazy'></img>
      <p>Kacper Koczur</p>
      <div className='input-container'>
        <input
          placeholder='Enter password'
          type='password'
          onChange={inputHandler}
          value={ctx.inputValue}
          onKeyDown={handleKeyDown}
        ></input>
        {icon.iconState && <img src={arrowRight} alt='icon'></img>}
      </div>
    </div>
  );
};
