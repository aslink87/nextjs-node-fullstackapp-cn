import { ISupportProps } from 'pages/support';
import React from 'react';
import styles from '../Support.module.scss';

const FoodDonate: React.FC<ISupportProps> = ({ needs }) => {
  const filterNeeds = (arg: string | undefined | null) => {
    if (typeof arg === 'string')
      return (
        <>
          <li key={arg}>{arg}</li>
        </>
      );
  };

  return (
    <section className={styles.foodDonate}>
      <h1>Food Pantry Donations</h1>
      <h2>Your food donations help us feed our community</h2>
      <p>
        Eighty five percent of all of the food that goes inside our food boxes
        come from the generous support of our community. Thank you for your
        faithful help. Non-perishable food items can be dropped off any time in
        our food donation box located on the West side of the building. This box
        is checked several times each day. Someone is here for perishable items
        or if you need help on Mondays 9-6, Tuesdays 9-4, Thursdays 9-5 and
        Friday 9-noon. Please ring the buzzer on the West side of the building
        for help.
      </p>
      <h2>Extra Produce?</h2>
      <p>
        We love receiving your fresh garden produce. We also have a health and
        beauty products shelf where we give out personal hygiene products,
        Perrigo products, laundry soaps and toilet paper.
      </p>
      <h2>Have a Food Drive!</h2>
      <p>
        If your group or organization would like to organize a food drive for us
        you can click here for tools and information. If you are having a
        special party (birthday, anniversary, or Christmas) and don’t need gifts
        your guest may love to celebrate you by bringing food donations in your
        honor. Click here for our Party Kit
      </p>
      <h2>Items We Always Need Are</h2>
      <ul>
        {filterNeeds(needs[0].item0)}
        {filterNeeds(needs[0].item1)}
        {filterNeeds(needs[0].item2)}
        {filterNeeds(needs[0].item3)}
        {filterNeeds(needs[0].item4)}
        {filterNeeds(needs[0].item5)}
        {filterNeeds(needs[0].item6)}
        {filterNeeds(needs[0].item7)}
        {filterNeeds(needs[0].item8)}
        {filterNeeds(needs[0].item9)}
      </ul>
      <p>
        Please no opened or damaged products. Call before you shop if you want
        to know our immediate need 269-685-4166 Your food donations may be tax
        deductible just save your receipts and ask your tax advisor if you can
        use them.<strong>Our Tax ID# is 38-3451688</strong>.
      </p>
    </section>
  );
};

export default FoodDonate;
