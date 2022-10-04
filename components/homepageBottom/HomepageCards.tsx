import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsHelping,
  faComments,
  faAt,
  faCalendar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import styles from './HomepageCards.module.scss';
import Link from 'next/link';

interface ICardsProps {
  symbol: IconDefinition;
  title: string;
  content: string;
  buttonText: string;
}

const HomepageCards: React.FC = () => {
  const cardProps: ICardsProps[] = [
    {
      symbol: faHandsHelping,
      title: 'How to Help',
      content:
        'There are several ways to help Christian Neighbors. You can donate money, drop off food, buy us something from our Amazon Wishlist, or leave a lasting legacy for the future. You can even volunteer you time.',
      buttonText: 'Support Us',
    },
    {
      symbol: faComments,
      title: 'Testimonies',
      content:
        'We take our responsibility of improving our community very seriously. Check out what some of our supporters and clients have to say about us...',
      buttonText: 'Testimonies',
    },
    {
      symbol: faAt,
      title: 'Contact Us',
      content:
        'Feel free to call us at (269)685-4166 or email our office at info@christianneighbors.org. To reach a specific employee at Christian Neighbors please see our directory here...',
      buttonText: 'Directory',
    },
    {
      symbol: faCalendar,
      title: 'Events',
      content:
        "Throughout the year we host many events that may interest you. A few include the Reflection of Hope Auction, PATH Walk, or many Soup Suppers. To see what's upcoming view our calendar...",
      buttonText: 'Calendar',
    },
  ];

  return (
    <section className={styles.homepageCards}>
      <div className={styles.cardsContainer}>
        {cardProps.map((card: ICardsProps) => (
          <div className={styles.cardElement} key={card.title}>
            <div className={styles.cardFront}>
              <FontAwesomeIcon
                icon={card.symbol}
                className={styles.icon}
                size="3x"
              />
              <h2>{card.title}</h2>
            </div>
            <div className={styles.cardBack}>
              <p>{card.content}</p>
              <button>
                <Link href="/">
                  <a>{card.buttonText}</a>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageCards;
