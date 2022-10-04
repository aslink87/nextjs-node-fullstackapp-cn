import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import styles from './Hero.module.scss';

export interface IHeroProps {
  news: {
    title: string;
    content: string;
    link?: string;
    video?: string;
  };
}

const Hero: React.FC<IHeroProps> = ({ news }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroItem}>
        <span className={styles.heroTitle}>
          <h1>Our Latest News</h1>
        </span>
        <span className={styles.heroSubTitle}>
          <h2>{news.title}</h2>
        </span>
        <div className={styles.heroContent}>
          <p>{news.content}</p>
        </div>
        {news.link ? (
          <div className={styles.heroLink}>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              {news.link.slice(12)}
            </a>
          </div>
        ) : null}
        {news.video && hasWindow ? (
          <div className={styles.heroVideo}>
            <ReactPlayer
              className="playlistPlayer"
              url={news.video}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
