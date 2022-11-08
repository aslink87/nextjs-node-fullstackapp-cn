import React from 'react';
import {
  IPantryCalendarData,
  IPantryCalendarProps,
} from 'pages/pantryCalendar';
import styles from './PantryCalendar.module.scss';

const PantryCalendarComponent: React.FC<IPantryCalendarData> = ({
  calendar,
}) => {
  const calendarPDF: IPantryCalendarProps[] = calendar.filter(
    (calendar: IPantryCalendarProps) => calendar.index === 1
  );

  return (
    <section className={styles.container}>
      <div className={styles.calendarHeader}>
        <h1>Quarterly Pantry Calendar</h1>
      </div>
      {calendarPDF[0] ? (
        <>
          <div className={styles.calendarContainer}>
            <object
              className={styles.calendarFrame}
              title="Pantry-Calendar Preview"
              type="application/pdf"
              data={`../..${calendarPDF[0].doc}`}
            />
          </div>
        </>
      ) : (
        <div className={styles.enewsContainer}>
          <h2>No Pantry Calendar Found...</h2>
        </div>
      )}
    </section>
  );
};

export default PantryCalendarComponent;
