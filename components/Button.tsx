import React from 'react';
import Svg, { Icon } from './Svg';

type ButtonType = {
  icon: Icon;
  text: string;
  onClick?: () => void;
};

const Button = ({ icon, text, onClick }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className='gap-2 text-blue-400 bg-blue-100 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm pl-1 pr-2 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-blue-100 dark:bg-gray-700  dark:text-white dark:hover:bg-gray-400 dark:hover:text-gray-700'
    >
      <Svg icon={icon} />
      {text}
    </button>
  );
};
export default Button;
