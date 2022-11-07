import React from 'react';
import { partnersData, IPartnersProps } from './partnersData';
import styles from './ChurchPartners.module.scss';
import Link from 'next/link';

const ChurchPartners: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Church Partners</h1>
      <div className={styles.calendars}>
        <h2>Important Calendars</h2>
        <div className={styles.calendarList}>
          <Link href="/calendar">
            <a>Soup Supper Calendar</a>
          </Link>
          <Link href="/pantryCalendar">
            <a>Quarterly Food Pantry Calendar</a>
          </Link>
        </div>
      </div>
      <div className={styles.partners}>
        <h2>Local Church Partners</h2>
        <ul>
          <>
            {partnersData.map((program: IPartnersProps) => (
              <li key={program.id}>
                <Link href={program.link}>
                  <a>{program.title}</a>
                </Link>
                <p>{program.caption}</p>
              </li>
            ))}
          </>
        </ul>
      </div>
    </section>
  );
};

export default ChurchPartners;
