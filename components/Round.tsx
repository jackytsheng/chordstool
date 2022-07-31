import React, { ReactComponentElement, ReactElement } from 'react';
import Chip from './Chip';

type RoundProps = {
  Chips: ReactComponentElement<typeof Chip>[];
  number: number;
  title: string;
};

const Round = ({ Chips, number, title }: RoundProps) => {
  const displayTitle = `${
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
  } ${number}`;
  return (
    <div
      className={
        'border rounded-lg pb-8 px-4 flex flex-col align-item items-center dark:border-gray-600'
      }
    >
      <h3 className='my-4 font-bold'>{displayTitle}</h3>
      <div className='grid gap-2 grid-cols-2'>{Chips}</div>
    </div>
  );
};

export default Round;
