import React from 'react';
import styles from './Calendar.module.scss';

const CalendarPath: React.FC = () => {
  return (
    <div className={styles.path}>
      <h2>PATH Walk</h2>
      <p>
        Our annual PATH Walk is generally held on the first Sunday in October.
        Walk rotates each year between Plainwell and Otsego. In addition,
        participants may choose a virtual walk. We walk to bring awareness to
        hunger issues and to raise funds to prevent them. Stay tuned to our
        calendar and social media.
      </p>
    </div>
  );
};

export default CalendarPath;
