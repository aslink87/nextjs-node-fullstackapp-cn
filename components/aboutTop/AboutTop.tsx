import React from 'react';
import styles from './AboutTop.module.scss';

const AboutTop: React.FC = () => {
  return (
    <section className={styles.container} data-testid="abouttop-component">
      <div className={styles.header}>
        <h1>Mission and Oversight</h1>
        <h2>
          Our mission it to provide local families in need with Food, Emergency
          Financial Assistance and skill building Education to create
          self-sufficiency.
        </h2>
      </div>
      <div className={styles.content}>
        <p>Christian Neighbors has been serving our community since 1983.</p>
        <p>
          Christian Neighbors is a community agency serving individuals and
          families in Plainwell, Otsego and Martin school districts.
        </p>
        <p>
          We are blessed to have at least 50 Volunteers serve on a weekly basis.
        </p>
        <p>
          Christian Neighbors is governed by an all-volunteer board and teams
          who are carefully selected and diversified in their makeup.
        </p>
        <ul>
          <li>
            Our finances are monitored by a Finance Team made up of our board
            president, treasurer, bookkeeper, CPA, and local business owners.
          </li>
          <li>
            Our finances are raised and monitored by the Resource Development
            Team.
          </li>
          <li>
            Our Facilities Director and team cares for the building and ground
            with which the ministry has been greatly blessed.
          </li>
          <li>
            The Education Resource team oversees our classes and programs to
            strengthen individuals and community.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutTop;
