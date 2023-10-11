import React from 'react';

export const CurlyBraces = (props) => {
  return (
    <>
      <li className='curly-braces'>&#123;</li>
      <li>
        tech: <span className='const-item'>{props.tech}</span>,
      </li>
      <li>
        since: <span className='const-item'>{props.since}</span>
      </li>
      <li className='curly-braces'>&#125;,</li>
    </>
  );
};
