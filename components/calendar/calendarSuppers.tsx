import React from 'react';
import { ICalendarProps } from 'pages/calendar';

import styles from './Calendar.module.scss';
import Image from 'next/image';

const CalendarSuppers: React.FC<ICalendarProps> = ({ supper }) => {
  const supperImage = () => {
    if (supper) {
      return `http://localhost:3000/${supper!.doc}`;
    } else return '';
  };

  return (
    <div className={styles.suppers}>
      <h2>Soup Suppers</h2>
      <p>
        Our Soup Suppers are generally held between September through May. They
        are a fundraising event for Christian Neighbors hosted by our wonderful
        church partners to raise funds that go directly to our food pantry to
        help fight hunger within our community. Come enjoy a wonderful meal to
        help support a great cause! More information can be found on our
        calendar, in the attached flyer, and on our social media.
      </p>
      <h3>Soup Supper Calendar</h3>
      {supper ? (
        <div className={styles.image}>
          <Image
            src={supperImage()}
            loader={supperImage}
            // layout="fill"
            height={500}
            width={450}
            alt="Soup Supper Schedule"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CalendarSuppers;
