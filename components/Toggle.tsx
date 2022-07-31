import React from 'react';
import Svg, { Icon } from './Svg';

type ToggleProps = {
  onToggle: (bool: boolean) => void;
  isChecked: boolean;
};

const Toggle = ({ onToggle, isChecked }: ToggleProps) => (
  <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
    <input
      type='checkbox'
      value=''
      defaultChecked={isChecked}
      onChange={(e) => onToggle(e.target.checked)}
      id='toggle'
      className='sr-only peer'
    />
    <div className="w-9 h-5 relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-100 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
    <span className='ml-3 text-sm w-6 font-medium'>
      <Svg icon={isChecked ? Icon.Moon : Icon.Sun} />
    </span>
  </label>
);

export default Toggle;
