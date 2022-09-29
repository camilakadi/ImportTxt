import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import HomeContent from '../content/home/HomeContent';

const HomeIndex = () => (
    <>
        <Head>
            <title>Home</title>
            <meta property='og:title' content='Home' key='home' />
        </Head>
        <HomeContent />
    </>
);

export default HomeIndex;
