import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ICalendarProps } from 'pages/calendar';
import styles from './Calendar.module.scss';
import ReactPlayer from 'react-player';

const Calendar: React.FC<ICalendarProps> = ({ calendarHead }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const calendarHeadVerify = () => {
    if (calendarHead.title && calendarHead.content) return true;
    else return false;
  };

  return (
    <section className={styles.container}>
      <h1>Upcoming Events</h1>
      <div className={styles.calendarHead}>
        <h2>Important Information...</h2>
        <div className={styles.calendarHeadNews}>
          {calendarHeadVerify() ? (
            <>
              <h2>{calendarHead.title}</h2>
              <p>{calendarHead.content}</p>
              {calendarHead.link ? (
                <Link href={calendarHead.link!}>
                  <a>{calendarHead.link.slice(12)}</a>
                </Link>
              ) : null}
              {calendarHead.video && hasWindow ? (
                <div className={styles.calendarVideo}>
                  <ReactPlayer
                    className="playlistPlayer"
                    url={calendarHead.video}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              ) : null}
            </>
          ) : (
            <h2>No near upcoming events.</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
