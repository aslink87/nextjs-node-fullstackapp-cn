import React from 'react';
import styles from './Calendar.module.scss';

const CalendarAuction: React.FC = () => {
  return (
    <div className={styles.auction}>
      <h2>Annual Reflection of Hope Auction</h2>
      <p>
        Each year we host a fun Reflection of Hope Auction event that is our
        main source of funds for emergency relief to prevent homelessness and
        loss of utilities in our neighborhood.
      </p>
    </div>
  );
};

export default CalendarAuction;
