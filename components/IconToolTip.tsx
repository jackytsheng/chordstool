import React, { useState } from 'react';
import Svg, { Icon } from './Svg';

const IconToolTip = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const showTooltip = () => {
    setShow(true);
  };
  const hideTooltip = () => {
    setShow(false);
  };
  return (
    <div
      tabIndex={0}
      aria-label='tooltip'
      className='focus:outline-none focus:ring-2 dark:text-gray-400 dark:focus:ring-blue-100 focus:ring-blue-300 rounded-full text-blue-300 relative'
      onMouseOver={showTooltip}
      onFocus={showTooltip}
      onMouseOut={hideTooltip}
    >
      <Svg icon={Icon.Info}></Svg>
      {show && (
        <div
          role='tooltip'
          className='z-20 italic text-xs mt-2 dark:text-gray-200 text-gray-400 absolute backdrop-blur-sm bg-white/20 w-64 transition duration-150 ease-in-out left-[-7.5rem] shadow-lg p-4 rounded-lg'
        >
          <p>- Names are separated by line</p>
          <p>- Trailing and leading spaces are trimmed</p>
          <p>- Empty lines are skipped</p>
        </div>
      )}
    </div>
  );
};

export default IconToolTip;
