import React from "react";
import FolderContext from "../../store/folderContext";
import { useContext } from "react";
import "./FinderFormat.css";
export const FinderFormat = () => {
  const closed = useContext(FolderContext);
  return (
    <div className='folder-format'>
      <svg
        style={{
          width: closed.isClosed === false ? "25px" : "0",
          height: closed.isClosed === false ? "25px" : "0",
          padding: closed.isClosed === false ? "4px" : "0",
        }}
        viewBox='0 0 22 22'
      >
        <g stroke='none' strokeWidth='2' fill='none' fillRule='evenodd'>
          <g
            transform='translate(-500.000000, -547.000000)'
            fill='var(--font-color)'
          >
            <g id='Group' transform='translate(500.000000, 547.000000)'>
              <path
                fill='var(--font-color)'
                d='M10,0 L10,10 L0,10 L0,0 L10,0 Z M9,1 L1,1 L1,9 L9,9 L9,1 Z'
                id='Combined-Shape'
              ></path>
              <path
                fill='var(--font-color)'
                d='M22,0 L22,10 L12,10 L12,0 L22,0 Z M21,1 L13,1 L13,9 L21,9 L21,1 Z'
                id='Combined-Shape-Copy'
              ></path>
              <path
                fill='var(--font-color)'
                d='M22,12 L22,22 L12,22 L12,12 L22,12 Z M21,13 L13,13 L13,21 L21,21 L21,13 Z'
                id='Combined-Shape-Copy-2'
              ></path>
              <path
                fill='var(--font-color)'
                d='M10,12 L10,22 L0,22 L0,12 L10,12 Z M9,13 L1,13 L1,21 L9,21 L9,13 Z'
                id='Combined-Shape-Copy-3'
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <svg width='25px' height='25px' viewBox='0 0 22 22'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-528.000000, -547.000000)' fill='white'>
            <g id='Group-2' transform='translate(528.000000, 547.000000)'>
              <rect
                id='Rectangle'
                fill='var(--font-color)'
                x='0'
                y='0'
                width='4'
                height='4'
              />
              <rect
                id='Rectangle-Copy'
                fill='var(--font-color)'
                x='6'
                y='0'
                width='16'
                height='4'
              />
              <rect
                id='Rectangle-Copy-8'
                fill='var(--font-color)'
                x='6'
                y='6'
                width='16'
                height='4'
              />
              <rect
                id='Rectangle-Copy-9'
                fill='var(--font-color)'
                x='6'
                y='12'
                width='16'
                height='4'
              />
              <rect
                id='Rectangle-Copy-10'
                fill='var(--font-color)'
                x='6'
                y='18'
                width='16'
                height='4'
              />
              <rect
                fill='var(--font-color)'
                id='Rectangle-Copy-4'
                x='0'
                y='6'
                width='4'
                height='4'
              />
              <rect
                id='Rectangle-Copy-5'
                x='0'
                y='12'
                fill='var(--font-color)'
                width='4'
                height='4'
              />
              <rect
                id='Rectangle-Copy-6'
                x='0'
                y='18'
                fill='var(--font-color)'
                width='4'
                height='4'
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width='25px'
        height='25px'
        viewBox='0 0 31 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='1.973'
          y='2.053'
          width='27'
          height='24'
          rx='3'
          transform='rotate(-.216 1.973 2.053)'
          stroke='var(--font-color)'
          strokeWidth='2'
        />
        <path
          d='M11.068 2.5V25m8.999-22.5V25'
          stroke='var(--font-color)'
          strokeWidth='2'
        />
      </svg>
    </div>
  );
};
