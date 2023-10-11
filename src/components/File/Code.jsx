import React from 'react';

export const Code = (props) => {
  return (
    <>
      <li>
        <span className='const'>const </span>
        <span className='name'>{props.name}</span>
        <span className='equal'> = </span>
        <span className='const-item'>{props.item}</span>
        <span className='semicolon'>;</span>
      </li>
    </>
  );
};
