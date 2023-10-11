import React from "react";
import file from "../../images/file.png";
import FileContex from "../../store/fileContext";
import FolderContext from "../../store/folderContext";
import ZindexContext from "../../store/zIndexContext";
import "./FinderItem.css";
import { useContext } from "react";
export const FinderItem = () => {
  const fileContext = useContext(FileContex);
  const closed = useContext(FolderContext);
  const zIndex = useContext(ZindexContext);
  return (
    <div
      className='file-container'
      onClick={() => {
        setTimeout(() => {
          zIndex.setFileIndex(true);
          zIndex.setWallpaperIndex(false);
          zIndex.setFinderIndex(false);
        }, 10);

        fileContext.setIsFileClosed(false);
      }}
      style={{
        display: closed.isClosed === false ? "block" : "none",
      }}
    >
      <img src={file} alt='file icon'></img>
      <h3>Resume.js</h3>
    </div>
  );
};
