import React from 'react';
import IconToolTip from './IconToolTip';

type TextareaProps = {
  setValues: (val: string[]) => void;
  displayValue: string;
  setDisplayValue: (val: string) => void;
};

const Textarea = ({
  setValues,
  displayValue,
  setDisplayValue,
}: TextareaProps) => {
  return (
    <section>
      <div className='flex gap-2 items-center mb-2'>
        <label
          htmlFor='names'
          className='text-sm font-medium dark:text-gray-400'
        >
          Enter Names for Pairing
        </label>
        <IconToolTip>Default tooltip</IconToolTip>
      </div>
      <textarea
        onChange={({ target }) => {
          setValues(target.value.split('\n').filter((r) => r.trim()));
          setDisplayValue(target.value);
        }}
        value={displayValue}
        id='names'
        rows={10}
        maxLength={300}
        className='block p-2.5 w-full text-sm focus:outline-none bg-slate-50/90 focus:ring-4 rounded-lg border border-gray-300 focus-visible:border-blue-300 dark:focus-visible:border-blue-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-100 dark:focus:border-blue-100'
        placeholder='Enter names here'
      ></textarea>
    </section>
  );
};
export default Textarea;
