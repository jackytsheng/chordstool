import React from 'react';

type ChipProps = {
  name: string;
};

const Chip = ({ name }: ChipProps) =>
  name.trim() ? (
    <span className='min-h-[2rem] text-center rounded-lg dark:bg-gray-700  dark:text-white bg-blue-100 py-1 px-3 text-blue-400 '>
      {name.trim()}
    </span>
  ) : (
    <></>
  );
export default Chip;
