import React from 'react';
import styles from '../Assistance.module.scss';

const Financial: React.FC = () => {
  return (
    <div className={styles.financial}>
      <h1>Financial Assistance</h1>
      <h2>Residents of Plainwell, Otsego and Martin School Districts</h2>
      <p>
        We assist clients financially with critical temporary needs in the areas
        of: Rental assistance (first month’s rent, security deposit, back rent,
        eviction) Utility shut-offs or payments (preventing loss of utilities or
        loss of winter protection plan, fuel oil or propane) Medical payment
        assistance (doctor visits, vision, dental, some prescriptions)
        Prescription Costs (no pain, narcotic or controlled substances, no
        exceptions) Landlord/Utility Vendor Mediation Referral service to other
        human services agencies in Allegan County
      </p>
      <h2>How do I get help?</h2>
      <p>
        When you first contact Christian Neighbors, you will come to our offices
        and talk to a case manager who will ask some questions about how many
        people there are in your family, how much money you make and what your
        current expenses are. You will be asked about any special circumstances
        that you are going through. We will talk to you about what things you
        have already tried to do to help yourself and find out what assistance
        you might be receiving from other sources.
      </p>
      <h2>
        Bring the following items during the hours listed below, arrive at least
        1/2 hour before closing:
      </h2>
      <ul>
        <li>Photo id showing your current address</li>
        <li>
          Proof of income for each person in the home who has income (pay stubs,
          social security award letters, unemployment benefits, child support.
          etc)
        </li>
        <li>
          Social security cards for each person in the home (or a legal document
          with social security numbers on it)
        </li>
        <li>Birth dates for each person in the home</li>
        <li>
          Depending on what you need help with, bring your shut off notice, DHS
          decision notice, letter from your landlord, eviction notice, etc.
        </li>
      </ul>
      <h2>State Emergency Relief Forms (SER)</h2>
      <p>
        DHHS requires the use of the MI Bridges web site for requesting state
        emergency relief (SER). Christian Neighbors is a Community Navigation
        partner with DHHS. We can help you complete the SER application and we
        can fax any supporting documentation to DHHS for you. Always follow-up
        with your DHHS case worker to make sure they received all necessary
        items. Have questions? Call 269-685-4166 ext. 102
      </p>
      <h2>Call 2-1-1 for assistance if you are not in our service area.</h2>
    </div>
  );
};

export default Financial;
