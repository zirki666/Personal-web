import React, { useRef, useContext } from "react";
import FolderIcon from "../../images/folder.png";
import FolderContext from "../../store/folderContext";
import { useDraggable } from "@neodrag/react";

import "./Folder.css";
export const Folder = () => {
  const draggableRef = useRef(null);
  useDraggable(draggableRef, {
    bounds: { top: 30, left: 0, bottom: 70, right: 30 },
    grid: [50, 50],
  });
  const closed = useContext(FolderContext);
  return (
    <div className='folder-wrapper'>
      <div
        className='folder-container '
        ref={draggableRef}
        onClick={() => {
          closed.setIsClosed(false);
          console.log(closed.isClosed);
        }}
      >
        <img src={FolderIcon} alt='icon'></img>
        <p>Personal</p>
      </div>
    </div>
  );
};
