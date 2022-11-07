import React from 'react';
import Head from 'next/head';
import NavigationBar from '../../navigation/Navigation';

import styles from './PrimaryLayout.module.scss';
import Footer from '../../footer/Footer';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  console.log(PUBLIC_URL);

  return (
    <>
      <Head>
        <title>Christian Neighbors</title>
        <link rel="icon" href={`${PUBLIC_URL}/logoBackground.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using NextJS" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="nonprofit in Michigan" />
        <meta
          name="keywords"
          content="non-profit, financial assistance, food bank, education, Plainwell, Allegan county, Michigan"
        />
        <meta name="author" content="adam@slinkman.net" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Christian Neighbors" />
        <meta property="og:site_name" content="Christian Neighbors" />
      </Head>
      <NavigationBar />
      <div {...divProps} className={styles.main}>
        <main className={styles.mainContainer}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
