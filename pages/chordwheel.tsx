import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js';
Chart.register([ArcElement, ChartDataLabels]);
const SCALE = 2;
Chart.defaults.plugins.datalabels = {
  font: {
    size: 14 * SCALE,
    weight: 'bold',
  },
  display: (context) => context.dataset.data![context.dataIndex] === 1,
  formatter: (_, context) => context.chart.data.labels![context.dataIndex],
};

import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const ChordWheel: NextPage = () => {
  const highlight = 'rgba(223, 65, 86, 0.471)';
  const subHighlight = 'rgba(88, 158, 212, 0.471)';
  const highlighttext = '#f2f2f2';
  const length = 200 * SCALE + 2;
  return (
    <div className='flex min-h-screen  text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Round Robin Pair</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-screen h-screen flex justify-center items-center'>
        <div className='absolute w-full h-full'>
          <Doughnut
            options={{
              rotation: 15,
              cutout: 0,
              radius: 80 * SCALE,
              plugins: {
                datalabels: {
                  align: 'start',
                  anchor: 'end',
                  offset: 10,
                  font: (context) => {
                    const size = context.dataIndex === 11 ? 20 : 13;
                    return {
                      size: size * SCALE,
                    };
                  },
                  // rotation: (context) => (context.dataIndex === 11 ? -90 : 0),
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
              radius: 300 * SCALE,
              plugins: {
                datalabels: {
                  color: highlighttext,
                  textAlign: 'center',
                  font: {
                    size: 9 * SCALE,
                  },
                },
              },
            }}
            data={{
              labels: ['m7°/5♭ \n\n\n\n\n vii°', 'not'],
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
              rotation: 15,
              cutout: '75%',
              radius: 300 * SCALE,
              plugins: {
                datalabels: {
                  font: {
                    size: 20 * SCALE,
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
                  borderColor: ['#bdbdbd'],
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
              radius: 225 * SCALE,
              plugins: {
                datalabels: {
                  offset: (context) => {
                    switch (context.dataIndex) {
                      case 0:
                        return -1;
                      case 1:
                        return 5;
                      case 2:
                        return 3;
                      default:
                        return 0;
                    }
                  },
                  anchor: 'end',
                  align: 'start',
                  color: highlighttext,
                  textAlign: 'center',
                  font: {
                    size: 9 * SCALE,
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
                '  m7 m9 m11 \n\n\n\n\nii',
                'm7 m9\nm11 m6\n\n\n\nvi',
                'm7   \n\n\n\n\niii   ',
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
              rotation: 7.5,
              cutout: '66.66666666667%',
              radius: 225 * SCALE,
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

                  borderColor: ['#bdbdbd'],
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
              radius: 150 * SCALE,
              plugins: {
                datalabels: {
                  display: (context) =>
                    context.chart.data.labels![context.dataIndex] !== 'not',
                  offset: (context) => {
                    switch (context.dataIndex) {
                      case 0:
                        return -9;
                      case 1:
                        return 3;
                      case 2:
                        return -5;
                      default:
                        return -2;
                    }
                  },
                  anchor: 'end',
                  align: 'start',
                  color: highlighttext,
                  textAlign: 'center',
                  font: {
                    size: 9 * SCALE,
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
                'Maj7 Maj9\n Maj13 or 6\n\n\n\nIV',
                'Maj7 Maj9\nMaj11 Maj13\n\n\n\nI',
                '7 9 11 \nsus4 13\n\n\n\nV',
                '7 sus4\n\n\n\nII\n(V of V)',
                'not',
                '7 sus4\n\n\n\nIII\n(V of vi)',
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
              rotation: 15,
              cutout: '53.33333333333%',
              radius: 150 * SCALE,
              plugins: {
                datalabels: {
                  font: {
                    size: 18 * SCALE,
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
                  borderColor: ['#bdbdbd'],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default ChordWheel;
