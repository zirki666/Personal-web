import React from "react";
import "./CancelLogin.css";
import { useContext } from "react";
import ButtonContext from "../../store/buttonContext";
import IconContext from "../../store/iconContext";
export const CancelLogin = () => {
  const ctx = useContext(ButtonContext);
  const icon = useContext(IconContext);
  return (
    <>
      <div
        className='cancel-login'
        onClick={() => {
          ctx.setInputValue("");
          ctx.inputRef.current.trim().length > 0
            ? icon.setIconState(true)
            : icon.setIconState(false);
        }}
      >
        <div className='icon'>
          <p>X</p>
        </div>
      </div>
      <p id='cancel'>Cancel</p>
    </>
  );
};
