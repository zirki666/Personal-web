import React from "react";
import { useContext } from "react";
import FolderContext from "../../store/folderContext";
import folder from "../../images/folder.png";
import "./FinderFolder.css";
export const FinderFolder = (props) => {
  const closed = useContext(FolderContext);
  return (
    <div
      className='folder'
      style={{
        display: closed.isClosed === false ? "flex" : "none",
      }}
    >
      <img src={folder} alt='folder-icon'></img>
      <h2>{props.name}</h2>
    </div>
  );
};
