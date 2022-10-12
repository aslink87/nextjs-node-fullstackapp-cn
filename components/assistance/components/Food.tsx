import React from 'react';
import styles from '../Assistance.module.scss';

const Food: React.FC = () => {
  return (
    <div className={styles.food}>
      <h1>Food Assistance</h1>
      <h2>Residents of Otsego and Plainwell School Districts</h2>
      <p>
        Clients are able to shop the food pantry once per calendar month and
        receive enough food for three meals each day for five days. When
        available, diapers, personal hygiene products, cleaning supplies, paper
        supplies and over the counter medications can also be selected.
      </p>
      <h2>How do I get food?</h2>
      <p>
        Bring the following items during the hours listed below, arrive at least
        1/2 hour before closing, and in most cases you will be able to shop in
        our pantry the day that you come. If you lack any of the following
        items, please call ahead to find out what might serve as a temporary
        substitute: Photo ID showing your current address proof of income for
        each person in the home who has income (including pay stubs, social
        security award letters, unemployment benefits, child support, etc)
        social security cards for each person in the home and birth dates for
        each person in the home.
      </p>
      <h2>
        What if I’m living with other people who are not my immediate family?
      </h2>
      <p>
        We serve everyone in the home as one household, despite the fact that
        you may cook and keep your food separately. Please decide whose name the
        file will be listed under and that person can bring the required
        information for everyone in the home. In subsequent months, as long as
        the file is complete (all requested information has been provided),
        another adult in the home could shop for the household as long as we
        have a picture ID on file for that person.
      </p>
      <p>
        (If you are outside of our food service area please review the Allegan
        County Food Pantry Collaborative Brochure, fund services under the
        additional resources tab) OR Call 2-1-1 as they may be able to help you.
      </p>
    </div>
  );
};

export default Food;
