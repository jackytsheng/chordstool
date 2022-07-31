import type { NextPage } from 'next';
import Head from 'next/head';
import Chip from '../components/Chip';
import Nav, { MenuItem } from '../components/Nav';
import Round from '../components/Round';
import Textarea from '../components/Textarea';
import Input from '../components/Input';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Svg, { Icon } from '../components/Svg';
import generateRoundRobinPair, {
  WAIT,
} from '../algorithms/generateRoundRobinPair';
import Card from '../components/Card';

const Home: NextPage = () => {
  const initialNames = [
    'Goal Diggers',
    'Hot Shots',
    'Justice League',
    'Outliers',
    'Wolf Pack',
  ];
  const initialTitle = 'Round';
  const initialRounds = generateRoundRobinPair(initialNames).map((r) =>
    r.filter((name) => name !== WAIT)
  );
  const initialAreaValue = initialNames.join('\n');
  const [roundTitle, setRoundTitle] = useState(initialTitle);
  const [names, setNames] = useState(initialNames);
  const [rounds, setRounds] = useState(initialRounds);
  const [displayArea, setDisplayValue] = useState(initialAreaValue);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const downloadAsCSV = () => {
    let csvTitle = 'data:text/csv;charset=utf-8,Title';
    let csvContent = '';

    for (let i = 0; i < rounds.length; i++) {
      const displayTitle = `${
        roundTitle.charAt(0).toUpperCase() + roundTitle.slice(1).toLowerCase()
      } ${i + 1}`;
      csvContent += displayTitle;
      for (let j = 0; j < rounds[i].length; j += 2) {
        if (i === 0) csvTitle += `,Pair ${j + 1} Name 1, Pair ${j + 1} Name 2`;
        csvContent += `,${rounds[i][j]},${
          rounds[i][j + 1] ? rounds[i][j + 1] : ''
        }`;
      }
      csvContent += '\n';
    }
    const encodedUri = encodeURI(csvTitle + '\n' + csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'pairs.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const generate = () => {
    const rounds = generateRoundRobinPair(names).map((r) =>
      r.filter((name) => name !== WAIT)
    );
    setRounds(rounds);
  };

  const reset = () => {
    setRoundTitle(initialTitle);
    setNames(initialNames);
    setRounds(initialRounds);
    setDisplayValue(initialAreaValue);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById('__next')?.classList.add('dark');
    } else {
      document.getElementById('__next')?.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Round Robin Pair</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='flex w-full flex-1 flex-col items-center justify-center pl-10 pr-20 pb-20'>
          <header className='pt-36 pb-16'>
            <h1 className='text-6xl font-bold'>
              Round Robin {''}
              <span className='text-blue-400 rounded-lg'>Pairs</span>
            </h1>
          </header>

          <div className='grid grid-cols-[minmax(0px,_1fr)_280px] w-full auto-rows-auto'>
            <div className='flex flex-wrap justify-center gap-5 mx-8 items-start'>
              {rounds.map((eachRoundNames, index) => (
                <Round
                  key={roundTitle + index}
                  title={roundTitle}
                  number={index + 1}
                  Chips={eachRoundNames.map((name, index) => (
                    <Chip key={name + index} name={name} />
                  ))}
                />
              ))}
            </div>
            <section className='gap-4 flex flex-col'>
              <Input setValue={setRoundTitle} title={roundTitle} />
              <Textarea
                setValues={setNames}
                displayValue={displayArea}
                setDisplayValue={setDisplayValue}
              />
              <div className='flex mt-2 gap-4 justify-between'>
                <Button
                  icon={Icon.LeftChervon}
                  text={'Generate'}
                  onClick={generate}
                />
                <Button
                  icon={Icon.Download}
                  text={'Download as CSV'}
                  onClick={downloadAsCSV}
                />
              </div>
            </section>
          </div>
        </div>

        <Nav onToggle={setIsDarkMode} isChecked={isDarkMode} reset={reset} />
        <section className='w-full border-y flex gap-5 items-baseline dark:border-gray-600 p-10'>
          <Card title='What is Round Robin Pair ?'>
            <h4 className='mb-2 font-medium text-slate-600 dark:text-slate-200'>
              Introduction
            </h4>
            <p className='text-sm mb-2 text-slate-600 dark:text-slate-200'>
              Round Robin Pair is a tool designed for generating unique pairs
              among a large group of participants where each participant meet
              every other participant exactly once. This is commonly seen in
              sport, match, tournament or feedback session.
            </p>
            <h4 className='mb-2 font-medium text-slate-600 dark:text-slate-200'>
              Example use cases
            </h4>
            <ul className='text-sm mb-2 text-slate-600 dark:text-slate-200'>
              <li className='mb-2'>
                In a tournament group stage, each team has to play every other
                team within the same group exactly once.
              </li>
              <li className='mb-2'>
                At work, during a feedback session each employee would is
                required to give each other colleague one piece of feedback.
              </li>
              <li className='mb-2'>
                In school, small group of student are asked to introduce
                themselves to each other.
              </li>
            </ul>
            <a
              target='_blank'
              className='inline-flex items-center text-blue-400 rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-100 '
              href='https://en.wikipedia.org/wiki/Round-robin_tournament'
              rel='noopener noreferrer'
            >
              <span className='mr-2'>Link to wikipedia</span>
              <Svg icon={Icon.External}></Svg>
            </a>
          </Card>
          <Card title='Metrics'>
            <h4 className='my-2 font-medium text-slate-600 dark:text-slate-200'>
              How many pairs generated ?
            </h4>
            <span className='text-blue-400 font-bold text-4xl'>
              120,509,623
            </span>
            <h4 className='my-2 font-medium text-slate-600 dark:text-slate-200'>
              How many pairs shared ?
            </h4>
            <span className='text-blue-400 font-bold text-4xl'>2,403,537</span>
          </Card>
          <Card title='Odd or Even Number?'>
            <p className='mb-2 text-sm text-slate-600 dark:text-slate-200'>
              This tool can generate unique pairs for both even and odd number
              of participants. When there is an odd number, every participant
              will be a "bye" at some point, it means that the participant is
              not matching any one.
            </p>
          </Card>
        </section>
      </main>
      <footer className='flex h-24 w-full items-center justify-center '>
        {/* <span className='text-sm text-slate-600 dark:text-slate-200'>
          Created by Jackytsheng
        </span> */}
      </footer>
    </div>
  );
};

export default Home;
