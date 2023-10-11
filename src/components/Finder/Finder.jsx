import React from "react";
import FolderContext from "../../store/folderContext";
import ZindexContext from "../../store/zIndexContext";
import { FinderItem } from "./FinderItem";
import { useDraggable } from "@neodrag/react";
import { useContext, useRef } from "react";
import { FinderFormat } from "./FinderFormat";
import { FinderFolders } from "./FinderFolders";
import { FinderIcons } from "./FinderIcons";
import "./Finder.css";

export const Finder = () => {
  const closed = useContext(FolderContext);
  const zIndex = useContext(ZindexContext);
  const draggableRef = useRef(null);

  useDraggable(draggableRef, { bounds: "body", handle: ".folder-format" });
  return (
    <>
      <div
        className='finder-container'
        ref={draggableRef}
        style={{
          scale: closed.isClosed === false ? "1" : "0",
          zIndex: zIndex.finderIndex === true ? "2" : "1",
        }}
        onClick={() => {
          zIndex.setFileIndex(false);
          zIndex.setWallpaperIndex(false);
          zIndex.setFinderIndex(true);
        }}
      >
        <FinderIcons />
        <FinderFolders />
        <div
          className='folder-items'
          style={{ borderWidth: closed.isClosed === false ? "1px" : "0" }}
        >
          <FinderFormat />
          <FinderItem />
        </div>
      </div>
    </>
  );
};
