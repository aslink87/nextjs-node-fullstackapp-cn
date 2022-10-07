import React from 'react';
import { INewslettersData, INewsletterProps } from 'pages/newsletter';
import styles from './Newsletter.module.scss';
import Link from 'next/link';

const Newsletter: React.FC<INewslettersData> = ({ newsletters }) => {
  const eNews: INewsletterProps[] = newsletters.filter(
    (newsletter: INewsletterProps) => newsletter.index === 0
  );

  const firstNewsletter: INewsletterProps[] = newsletters.filter(
    (newsletter: INewsletterProps) => newsletter.index === 1
  );

  const secondNewsletter: INewsletterProps[] = newsletters.filter(
    (newsletter: INewsletterProps) => newsletter.index === 2
  );

  return (
    <section className={styles.container}>
      <div className={styles.enewsHeader}>
        <h1>What&apos;s Happening</h1>
      </div>
      {newsletters ? (
        <>
          <div className={styles.enewsContainer}>
            <h2>{eNews[0].title}</h2>
            <object
              className={styles.enewsFrame}
              title="E-News Preview"
              type="application/pdf"
              data={`../..${eNews[0].doc}`}
            />
          </div>
          <div className={styles.newsletterContainer}>
            <h2>Recent Newsletters</h2>
            <Link href={`http://localhost:3000${firstNewsletter[0].doc}`}>
              <a>{firstNewsletter[0].title}</a>
            </Link>
            <Link href={`http://localhost:3000${secondNewsletter[0].doc}`}>
              <a>{secondNewsletter[0].title}</a>
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.enewsContainer}>
          <h2>No Newsletters Found...</h2>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
