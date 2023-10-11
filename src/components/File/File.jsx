import React, { useContext, useRef } from "react";
import "./File.css";
import { Code } from "./Code";
import { CurlyBraces } from "./CurlyBraces";
import { useDraggable } from "@neodrag/react";
import FileContex from "../../store/fileContext";
import ZindexContext from "../../store/zIndexContext";
import { FileIcons } from "./FileIcons";
export const File = () => {
  const file = useContext(FileContex);
  const zIndex = useContext(ZindexContext);
  const draggableRef = useRef(null);
  useDraggable(draggableRef, { bounds: "body" });
  return (
    <>
      <div
        className='file-wrapper'
        ref={draggableRef}
        style={{
          scale: file.isFileClosed === false ? "1" : "0",
          zIndex: zIndex.fileIndex === true ? "2" : "1",
        }}
        onClick={() => {
          zIndex.setWallpaperIndex(false);
          zIndex.setFileIndex(true);
          zIndex.setFinderIndex(false);
        }}
      >
        <FileIcons />
        <div
          className='code'
          style={{
            padding: file.isFileClosed === false ? "12px 32px" : "0px",
          }}
        >
          <ul>
            <Code name='name' item="'Kacper'" />
            <Code name='lastname' item="'Koczur'" />
            <Code name='email' item="'koczurkacpper@gmail.com'" />
            <Code name='twitter' item="'@Zirki7'" />
            <li>
              <span className='const'>const </span>
              <span className='name'>exp</span>
              <span className='equal'> = </span>
              <span className='bracket'>&#91;</span>
            </li>
            <CurlyBraces tech='HTML + CSS' since='2 years' />
            <CurlyBraces tech='Javascript' since='6 months' />
            <CurlyBraces tech='React' since='3 months' />
            <li>
              <span className='bracket'>&#93;</span>
              <span className='semicolon'>;</span>
            </li>
            <li>
              <span className='equal'>export default </span>
              <span className='name'>Resume</span>
              <span className='semicolon'>;</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
