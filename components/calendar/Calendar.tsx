import React from 'react';
import { ICalendarProps } from 'pages/calendar';
import CalendarTop from './calendarTop';
import CalendarAuction from './calendarAuction';
import CalendarChristmas from './calendarChristmas';
import CalendarSuppers from './calendarSuppers';
import styles from './Calendar.module.scss';
import CalendarPath from './calendarPath';

const Calendar: React.FC<ICalendarProps> = ({ calendarHead, supper }) => {
  return (
    <section className={styles.container}>
      <h1>Upcoming Events</h1>
      <CalendarTop calendarHead={calendarHead} />
      <CalendarAuction />
      <CalendarChristmas />
      <CalendarSuppers supper={supper} />
      <CalendarPath />
    </section>
  );
};

export default Calendar;
