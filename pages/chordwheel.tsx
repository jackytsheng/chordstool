import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-plugin-labels';
import { Chart, ArcElement } from 'chart.js';
Chart.register([ArcElement, ChartDataLabels]);
const SCALE = 1;
Chart.defaults.plugins.datalabels = {
  font: {
    size: 14 * SCALE,
  },
  formatter: (_, context) => context.chart.data.labels![context.dataIndex],
};

import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
const ChordWheel: NextPage = () => {
  return (
    <div className='flex min-h-screen  text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Round Robin Pair</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-screen h-screen flex justify-center items-center'>
        <div className='absolute w-[202px] h-[202px]'>
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
                  font: {
                    size: 13 * SCALE,
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
                '7♭/\n5♯',
                '6♭/\n6♯',
                '5♭/\n7♯',
                '4♭',
                '3♭',
                '2♭',
                '♭',
                ' ',
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
        <div className='absolute z-20 w-[602px] h-[602px]'>
          <Doughnut
            options={{
              rotation: -15,
              cutout: 225,
              radius: 300 * SCALE,
              plugins: {
                datalabels: {
                  display: false,
                },
              },
            }}
            data={{
              datasets: [
                {
                  data: [1, 11],
                  borderWidth: 0,
                  backgroundColor: [
                    'rgba(86, 227, 255, 0.445)',
                    'rgba(255, 99, 125, 0)',
                  ],
                },
              ],
            }}
          />
        </div>
        <div className='absolute w-[602px] h-[602px]'>
          <Doughnut
            options={{
              rotation: 15,
              cutout: 225,
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
                'B♭°/\nA♯°',
                'F°/\nE♯°',
                'C°/\nB♯°',
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
        <div className='absolute w-[452px] h-[452px]'>
          <Doughnut
            options={{
              rotation: 7.5,
              cutout: 150,
              radius: 225 * SCALE,
              plugins: {},
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
                'D♭m/\nC♯m',
                'E♭m/\nD♯m',
                'A♭m/\nG♯m',
                'B♭m/\nA♯m',
                'E♭m/\nD♯m',
                'Fm/\nE♯m',
                'B♭m/\nA♯m',
                'Cm/\nB♯m',
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
        <div className='absolute w-[302px] h-[302p]'>
          <Doughnut
            options={{
              rotation: 15,
              cutout: 80,
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
                'F♭/\nE',
                'C♭/\nB',
                'G♭/\nF♯',
                'D♭/\nC♯',
                'A♭/\nG♯',
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
