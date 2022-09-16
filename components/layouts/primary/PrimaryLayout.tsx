import React from 'react';
import Head from 'next/head';
import NavigationBar from '../../navigation/Navigation';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Christian Neighbors</title>
      </Head>
      <NavigationBar />
      <div
        {...divProps}
        className={`main bg-[url('/background.jpg')] bg-cover min-h-screen flex flex-col ${justify}`}
      >
        <main className="bg-cn-blue/60 w-full h-screen">{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
