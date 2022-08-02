import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/chordwheel');
  }, []);
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Round Robin Pair</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Home;
