import React from 'react';
import { INewslettersData, INewsletterProps } from 'pages/newsletter';
import styles from './Newsletter.module.scss';

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
      <h1>What&apos;s Happening</h1>
      <h2>E-News</h2>
      <div className={styles.enewsContainer}>
        <h2>{eNews[0].title}</h2>
      </div>
      <div className={styles.newsletterContainer}>
        <h2>Recent Newsletters</h2>
        <p>{firstNewsletter[0].title}</p>
        <p>{secondNewsletter[0].title}</p>
      </div>
    </section>
  );
};

export default Newsletter;
