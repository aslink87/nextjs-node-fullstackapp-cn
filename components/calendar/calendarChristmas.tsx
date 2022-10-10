import React from 'react';
import styles from './Calendar.module.scss';

const CalendarChristmas: React.FC = () => {
  return (
    <div className={styles.christmas}>
      <h2>Christmas in July</h2>
      <p>
        Christmas in July is held on the fourth Thursday in July at Four Roses
        Café. The proceeds from this fun and lively event will help fund our
        food pantry to prevent hunger in our community.
      </p>
    </div>
  );
};

export default CalendarChristmas;
