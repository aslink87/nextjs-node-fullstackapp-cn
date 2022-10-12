import React from 'react';
import styles from './Assistance.module.scss';
import Education from './components/Education';
import Financial from './components/Financial';
import Food from './components/Food';

const Assistance: React.FC = () => {
  return (
    <div className={styles.assistance}>
      <Food />
      <Financial />
      <Education />
    </div>
  );
};

export default Assistance;
