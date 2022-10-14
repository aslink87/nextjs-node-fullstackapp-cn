import React from 'react';
import styles from '../Support.module.scss';

const Legacy: React.FC = () => {
  return (
    <section className={styles.legacy}>
      <h1>Leaving a Legacy</h1>
      <div className={styles.legacyUpper}>
        <p>
          Did you know that you can leave a lasting legacy with a meaningful
          planned gift that cost you nothing during your lifetime? Once your
          family and friends are provided for, we hope you consider a legacy
          gift that strengthens our community families forever, a part of your
          life story. Your Legacy gift will help ensure that our services will
          be available for future generations.
        </p>
      </div>
      <h2>Ways to Leave a Legacy</h2>
      <div className={styles.legacyLower}>
        <p>
          Designating a legacy gift in your will or trust is one of the most
          effective and sustainable ways to leave a lasting gift in your name.
          There are a few ways people give this gift to Christian Neighbors.
        </p>
        <ul>
          <li>
            Bequests: Through a bequest you can make a provision in your will or
            living trust for a specific dollar amount, a specific asset or a
            percentage of your estate.
          </li>
          <li>
            Gifts by beneficiary designation: When you give a gift for Christian
            Neighbors from your retirement plan, insurance plan or other assets,
            you ensure that the basic needs of our neighbors are cared for. It’s
            as simple as contacting the firm that holds your assets and asking
            for a beneficiary form to fill out
          </li>
          <li>
            Stocks, bonds and mutual funds: For questions or to transfer contact
            Debbie Clark at Clearwater Financial, 269-685-1170.
          </li>
          <li>
            Life insurance: If you have a life insurance policy that has
            outlasted its original purpose, you can use it to fund a legacy gift
            while also enjoying tax savings during your lifetime. Talk to your
            tax adviser about the various ways this option can benefit you
            today. Your unneeded insurance policy can impact another life
            forever.
          </li>
          <li>
            Retirement Accounts: (401k. Simple IRA, IRA, 403b, etc.) The IRA
            Charitable Rollover, as of 2016, has been made permanent. If you are
            70 1/2 years or older and want to make a gift without federal tax
            liability this is a great way to give. Your gift is tax free up to
            $100,000 per year.
          </li>
          <li>Real Estate</li>
          <li>
            “In Trust” Accounts: Any bank account or stock account in your name
            can be set up “In trust for Wings of Hope Hospice.” You retain
            exclusive control of the account during your lifetime. Upon your
            death, the account passes to Hospice without probate or tax
          </li>
          <li>
            Your unneeded insurance policy can impact another life forever.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Legacy;
