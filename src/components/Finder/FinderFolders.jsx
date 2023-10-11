import React from "react";
import FolderContext from "../../store/folderContext";
import { useContext } from "react";
import { FinderFolder } from "./FinderFolder";
import "./FinderFolders.css";
export const FinderFolders = () => {
  const closed = useContext(FolderContext);
  return (
    <div
      className='folders'
      style={{
        display: closed.isClosed === false ? "block" : "none",
      }}
    >
      <h1
        style={{
          display: closed.isClosed === false ? "block" : "none",
        }}
      >
        Favorite
      </h1>
      <FinderFolder name='Personal' />
      <FinderFolder name='Projects' />
    </div>
  );
};
