import React from 'react';
import Script from 'next/script';
import styles from '../Support.module.scss';

const Donate: React.FC = () => {
  return (
    <section className={styles.donate}>
      <Script src="https://givebutter.com/js/widget.js" strategy="lazyOnload" />
      <h1>Donate to Christian Neighbors</h1>
      <iframe
        title="donation-form"
        src="https://givebutter.com/embed/c/christian-neighbors-se"
        name="givebutter"
        frameBorder="0"
        scrolling="yes"
        seamless
        // @ts-expect-error: Ignore props to tailored iframe
        allowpaymentrequest="true"
      ></iframe>
    </section>
  );
};

export default Donate;
