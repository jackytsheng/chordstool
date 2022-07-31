import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Chart, ArcElement } from 'chart.js';
Chart.register([ArcElement, ChartDataLabels]);

import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
const ChordWheel: NextPage = () => {
  const scale = 1;
  return (
    <div className='flex min-h-screen  text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Round Robin Pair</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-screen h-screen flex justify-center items-center'>
        <div className='absolute w-[600px] h-[600px]'>
          <Doughnut
            options={{
              rotation: 15,
              cutout: 225,
              radius: 300 * scale,
              plugins: {
                datalabels: {
                  labels: {},
                },
              },
            }}
            data={{
              labels: ['a', 'b'],
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
        <div className='absolute w-[450px] h-[450px]'>
          <Doughnut
            options={{
              rotation: 7.5,
              cutout: 150,
              radius: 225 * scale,
              plugins: {},
            }}
            data={{
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
        <div className='absolute w-[300px] h-[300p]'>
          <Doughnut
            options={{ rotation: 15, cutout: 80, radius: 150 * scale }}
            data={{
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
