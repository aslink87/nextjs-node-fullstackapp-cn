import React from 'react';
import CollectionCard from './CollectionCard';

import styles from './HomepageCollection.module.scss';

const HomepageCollection: React.FC = () => {
  return (
    <section className={styles.collectionContainer}>
      <div className={styles.collectionItem}>
        <span className={styles.collectionTitle}>
          <h1>What We Do</h1>
        </span>
        <span className={styles.collectionSubTitle}>
          <h2>
            Our Mission is to provide local families in need with Food,
            Emergency Financial Assistance and Skill Building Education to
            create Self Sufficiency.
          </h2>
        </span>
        <CollectionCard />
      </div>
    </section>
  );
};

export default HomepageCollection;
