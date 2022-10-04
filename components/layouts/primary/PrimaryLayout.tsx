import React from 'react';
import Head from 'next/head';
import NavigationBar from '../../navigation/Navigation';

import styles from './PrimaryLayout.module.scss';
import Footer from 'components/footer/Footer';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>Christian Neighbors</title>
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
