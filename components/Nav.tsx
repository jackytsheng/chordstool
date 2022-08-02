import React from 'react';
import Svg, { Icon } from './Svg';

type NavProps = {
  title: string;
  coloredText: string;
};

const Nav = ({ title, coloredText }: NavProps) => {
  return (
    <nav className='z-50 fixed justify-between top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm  bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10'>
      <span className='text-base'>
        {title}
        <span className='text-blue-400 rounded-lg pl-1'>{coloredText}</span>
      </span>
      <div className='flex items-center gap-5'>
        <div className='cursor-pointer flex gap-1 items-center hover:text-blue-400 dark:hover:text-blue-300'>
          <span className='text-base'>More Tools Coming Soon ... </span>
          <Svg icon={Icon.Truck} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
