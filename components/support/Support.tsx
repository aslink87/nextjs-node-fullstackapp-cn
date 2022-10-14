import { ISupportProps } from 'pages/support';
import React from 'react';
import Donate from './components/Donate';
import FoodDonate from './components/FoodDonations';
import Legacy from './components/Legacy';
import styles from './Support.module.scss';

const Support: React.FC<ISupportProps> = ({ needs }) => {
  return (
    <section className={styles.container}>
      <Donate />
      <FoodDonate needs={needs} />
      <Legacy />
    </section>
  );
};

export default Support;
