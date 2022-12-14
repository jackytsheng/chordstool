import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js';
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import useWindowSize from '../hooks/useScreenSize';

const ChordWheel: NextPage = () => {
  const SLATE_DARK = '#64748b';
  const SLATE_LIGHT = '#cbd5e1';
  const highlight = '#f43f5d58';
  const subHighlight = '#06b6d458';
  const highlighttext = '#1e293b';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [spin, setSpin] = useState(0);
  const [Scale, setScale] = useState(0.7);
  const { width } = useWindowSize();

  const spinClockwise = () => {
    setSpin(spin + 1);
    setCurrentIndex((currentIndex || 12) - 1);
  };
  const spinAntiClockwise = () => {
    setSpin(spin - 1);
    setCurrentIndex((currentIndex + 1) % 12);
  };

  useEffect(() => {
    console.log(width);
    if (width > 1080) {
      setScale(1.6);
    } else if (width > 768) {
      setScale(1.2);
    } else {
      setScale(0.7);
    }
  }, [width]);

  Chart.defaults.plugins.datalabels = {
    font: {
      size: 14 * Scale,
      weight: 'bold',
    },
    color: SLATE_DARK,
    display: (context) => context.dataset.data![context.dataIndex] === 1,
    formatter: (_, context) => context.chart.data.labels![context.dataIndex],
  };
  Chart.register([ArcElement, ChartDataLabels]);
  Chart.defaults.events = [];

  const keys = [
    'C',
    'G',
    'D',
    'A',
    ' E (F♭)',
    ' B (C♭)',
    ' G♭ (F♯)',
    ' D♭ (C♯)',
    ' A♭ (G♯)',
    'E♭',
    'B♭',
    'F',
  ];

  return (
    <div className='text-slate-500'>
      <Head>
        <title>Chord Wheel</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='pt-20 flex justify-center flex-col items-center gap-5 lg:gap-2'>
        <Nav title={'Chord'} coloredText={'Wheel'} />
        <section className='flex justify-center items-center'>
          <button
            type='button'
            onClick={spinAntiClockwise}
            className='shadow-lg shadow-slate-500/50 text-white bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-400 font-medium rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-cente ml-5'
          >
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
            <span className='px-2 text-base'>Dominant</span>
            <span className='sr-only'>Left Arrow</span>
          </button>
          <div className='mx-4 bg-slate-500 border-none text-white text-l md:text-xl font-bold shadow-lg shadow-slate-500/50 py-2 px-5 border rounded-lg'>
            {keys[currentIndex]}
          </div>
          <button
            type='button'
            onClick={spinClockwise}
            className='shadow-lg shadow-slate-500/50 text-white bg-slate-500 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-400 font-medium rounded-full text-sm  p-1 lg:p-2.5 text-center inline-flex items-center'
          >
            <span className='px-2 text-base'>Subdominant</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Right Arrow</span>
          </button>
        </section>
        <section className='relative w-[420px] md:w-[720px] lg:w-[960px]'>
          <div className='absolute w-full h-full'>
            <Doughnut
              options={{
                rotation: 15,
                cutout: 0,
                radius: 80 * Scale,
                plugins: {
                  datalabels: {
                    align: 'start',
                    anchor: 'end',
                    offset: 10,
                    font: (context) => {
                      const size = context.dataIndex === 11 ? 20 : 13;
                      return {
                        size: size * Scale,
                      };
                    },
                  },
                },
              }}
              data={{
                labels: [
                  '♯',
                  '2♯',
                  '3♯',
                  '4♯',
                  ' 7♭\n(5♯)',
                  ' 6♭\n(6♯)',
                  ' 5♭\n(7♯)',
                  '4♭',
                  '3♭',
                  '2♭',
                  '♭',
                  ' ▲ \nKey',
                ],
                datasets: [
                  {
                    data: Array(12).fill(1),
                    backgroundColor: ['white'],
                  },
                ],
              }}
            />
          </div>
          <div className='absolute z-20 w-full h-full'>
            <Doughnut
              options={{
                rotation: -15,
                cutout: '75%',
                radius: 300 * Scale,
                plugins: {
                  datalabels: {
                    color: highlighttext,
                    textAlign: 'center',
                    font: {
                      size: 6 * Scale,
                    },
                  },
                },
              }}
              data={{
                labels: ['m7°/5♭ \n\n\n\n\n\n\n\n vii°', 'not'],
                datasets: [
                  {
                    data: [1, 11],
                    borderWidth: 0,
                    backgroundColor: [highlight, 'rgba(255, 99, 125, 0)'],
                  },
                ],
              }}
            />
          </div>
          <div className='absolute w-full h-full'>
            <Doughnut
              options={{
                rotation: 15 + 30 * spin,
                cutout: '75%',
                radius: 300 * Scale,
                plugins: {
                  datalabels: {
                    font: {
                      size: 20 * Scale,
                    },
                  },
                },
              }}
              data={{
                labels: [
                  'F♯°',
                  'C♯°',
                  'G♯°',
                  'D♯°',
                  '  B♭°\n(A♯°)',
                  '  F°\n(E♯°)',
                  '  C°\n(B♯°)',
                  'G°',
                  'D°',
                  'A°',
                  'E°',
                  'B°',
                ],
                datasets: [
                  {
                    data: Array(12).fill(1),
                    backgroundColor: [
                      'rgba(255, 99, 125, 0.2)',
                      'rgba(255, 99, 208, 0.2)',
                      'rgba(232, 99, 255, 0.2)',
                      'rgba(154, 54, 235, 0.2)',
                      'rgba(75, 54, 235, 0.2)',
                      'rgba(86, 111, 255, 0.2)',
                      'rgba(86, 227, 255, 0.2)',
                      'rgba(75, 192, 153, 0.2)',
                      'rgba(75, 192, 83, 0.2)',
                      'rgba(157, 192, 75, 0.2)',
                      'rgba(255, 194, 102, 0.2)',
                      'rgba(255, 185, 64, 0.2)',
                    ],
                    borderColor: [SLATE_LIGHT],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
          <div className='absolute z-20 w-full h-full'>
            <Doughnut
              options={{
                rotation: -22.5,
                cutout: '66.66666666667%',
                radius: 225 * Scale,
                plugins: {
                  datalabels: {
                    offset: (context) => {
                      switch (context.dataIndex) {
                        case 0:
                          return -1 * Scale;
                        case 1:
                          return 5 * Scale;
                        case 2:
                          return 5 * Scale;
                        default:
                          return 0;
                      }
                    },
                    anchor: 'end',
                    align: 'start',
                    color: highlighttext,
                    textAlign: 'center',
                    font: {
                      size: 6 * Scale,
                    },
                    rotation: (context) => {
                      const index = context.dataIndex;
                      return 15 * (index - 1);
                    },
                  },
                },
              }}
              data={{
                labels: [
                  '  m7 m9 m11\n\n\n\n\n\n\n\nii',
                  'm7 m9 m11 m6\n\n\n\n\n\n\n\nvi',
                  'm7   \n\n\n\n\n\n\n\niii   ',
                  'not',
                ],
                datasets: [
                  {
                    data: [1, 1, 1, 21],
                    backgroundColor: [
                      highlight,
                      highlight,
                      highlight,
                      'rgba(255, 99, 125, 0)',
                    ],
                    borderWidth: 0,
                  },
                ],
              }}
            />
          </div>
          <div className='absolute w-full h-full'>
            <Doughnut
              options={{
                rotation: 7.5 + 30 * spin,
                cutout: '66.66666666667%',
                radius: 225 * Scale,
              }}
              data={{
                labels: [
                  'Am',
                  'Bm',
                  'Em',
                  'F♯m',
                  'Bm',
                  'C♯m',
                  'F♯m',
                  'G♯m',
                  ' D♭m\n(C♯m)',
                  ' E♭m\n(D♯m)',
                  ' A♭m\n(G♯m)',
                  ' B♭m\n(A♯m)',
                  ' E♭m\n(D♯m)',
                  ' Fm\n(E♯m)',
                  ' B♭m\n(A♯m)',
                  ' Cm\n(B♯m)',
                  'Fm',
                  'Gm',
                  'Cm',
                  'Dm',
                  'Gm',
                  'Am',
                  'Dm',
                  'Em',
                ],
                datasets: [
                  {
                    data: Array(24).fill(1),
                    backgroundColor: [
                      'rgba(255, 99, 99, 0.2)',
                      'rgba(255, 99, 125, 0.2)',
                      'rgba(255, 99, 190, 0.2)',
                      'rgba(255, 99, 208, 0.2)',
                      'rgba(247, 99, 255, 0.2)',
                      'rgba(232, 99, 255, 0.2)',
                      'rgba(181, 54, 235, 0.2)',
                      'rgba(154, 54, 235, 0.2)',
                      'rgba(117, 54, 235, 0.2)',
                      'rgba(75, 54, 235, 0.2)',
                      'rgba(59, 71, 244, 0.2)',
                      'rgba(86, 111, 255, 0.2)',
                      'rgba(58, 154, 250, 0.172)',
                      'rgba(86, 227, 255, 0.2)',
                      'rgba(49, 186, 214, 0.177)',
                      'rgba(75, 192, 176, 0.2)',
                      'rgba(83, 192, 137, 0.2)',
                      'rgba(75, 192, 83, 0.2)',
                      'rgba(126, 192, 75, 0.2)',
                      'rgba(157, 192, 75, 0.2)',
                      'rgba(172, 210, 59, 0.2)',
                      'rgba(255, 194, 102, 0.2)',
                      'rgba(255, 179, 102, 0.2)',
                      'rgba(255, 150, 64, 0.2)',
                    ],

                    borderColor: [SLATE_LIGHT],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
          <div className='absolute z-20 w-full h-full'>
            <Doughnut
              options={{
                rotation: -45,
                cutout: '53.33333333333%',
                radius: 150 * Scale,
                plugins: {
                  datalabels: {
                    display: (context) =>
                      context.chart.data.labels![context.dataIndex] !== 'not',
                    offset: (context) => {
                      switch (context.dataIndex) {
                        case 0:
                          return -13 * Scale;
                        case 1:
                          return 5 * Scale;
                        case 2:
                          return -6 * Scale;
                        default:
                          return 1 * Scale;
                      }
                    },
                    anchor: 'end',
                    align: 'start',
                    color: highlighttext,
                    textAlign: 'center',
                    font: {
                      size: 6 * Scale,
                    },
                    rotation: (context) => {
                      const index = context.dataIndex;
                      return 30 * (index - 1);
                    },
                  },
                },
              }}
              data={{
                labels: [
                  'Maj7 Maj9 Maj13 or 6\n\n\n\n\n\n\n\nIV',
                  'Maj7 Maj9 Maj11 Maj13\n\n\n\n\n\n\n\nI',
                  '7 9 11 sus4 13\n\n\n\n\n\n\n\nV',
                  '7 sus4\n\n\n\n\n\n\nII\n(V of V)',
                  'not',
                  '7 sus4\n\n\n\n\n\n\nIII\n(V of vi)',
                  'not',
                ],
                datasets: [
                  {
                    data: [1, 1, 1, 1, 1, 1, 6],
                    borderWidth: 0,
                    backgroundColor: [
                      highlight,
                      highlight,
                      highlight,
                      subHighlight,
                      'rgba(255, 99, 125, 0)',
                      subHighlight,
                      'rgba(255, 99, 125, 0)',
                    ],
                  },
                ],
              }}
            />
          </div>
          <div className='absolute w-full h-full'>
            <Doughnut
              options={{
                rotation: 15 + 30 * spin,
                cutout: '53.33333333333%',
                radius: 150 * Scale,
                plugins: {
                  datalabels: {
                    font: {
                      size: 18 * Scale,
                    },
                  },
                },
              }}
              data={{
                labels: [
                  'G',
                  'D',
                  'A',
                  ' E\n(F♭)',
                  ' B\n(C♭)',
                  ' G♭\n(F♯)',
                  ' D♭\n(C♯)',
                  ' A♭\n(G♯)',
                  'E♭',
                  'B♭',
                  'F',
                  'C',
                ],
                datasets: [
                  {
                    data: Array(12).fill(1),
                    backgroundColor: [
                      'rgba(255, 99, 125, 0.2)',
                      'rgba(255, 99, 208, 0.2)',
                      'rgba(232, 99, 255, 0.2)',
                      'rgba(154, 54, 235, 0.2)',
                      'rgba(75, 54, 235, 0.2)',
                      'rgba(86, 111, 255, 0.2)',
                      'rgba(86, 227, 255, 0.2)',
                      'rgba(75, 192, 153, 0.2)',
                      'rgba(75, 192, 83, 0.2)',
                      'rgba(157, 192, 75, 0.2)',
                      'rgba(255, 194, 102, 0.2)',
                      'rgba(255, 150, 64, 0.2)',
                    ],
                    borderColor: [SLATE_LIGHT],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChordWheel;
