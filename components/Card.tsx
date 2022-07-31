import React, { ReactNode } from 'react';

type CardProps = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div
      className={
        'border rounded-lg pb-8 px-4 bg-slate-50/90 dark:bg-gray-700 dark:border-gray-600 flex-1'
      }
    >
      <h3 className='my-4 font-bold'>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
