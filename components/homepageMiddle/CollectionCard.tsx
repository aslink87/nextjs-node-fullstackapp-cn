import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBreadSlice,
  faHandHoldingUsd,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import styles from './HomepageCollection.module.scss';

interface ICollectionCardProps {
  titleLeft: string;
  symbol: any;
  titleRight: string;
  content: string;
  buttonText: string;
}

const CollectionCard: React.FC<ICollectionCardProps> = () => {
  const cardProps: ICollectionCardProps[] = [
    {
      titleLeft: 'Food',
      symbol: faBreadSlice,
      titleRight: 'We provide for...',
      content:
        'Our food pantry provides for thousands of Neighbors-in-need every year. From families with children to disabled veterans we are always here to fight hunger in our neighborhoods.',
      buttonText: 'Food',
    },
    {
      titleLeft: 'Financial Assistance',
      symbol: faHandHoldingUsd,
      titleRight: 'We help with...',
      content:
        'Rental payments, Utility assistance, Medical expenses, and Prescription costs (no pain, narcotic or controlled substances) for residents of Plainwell, Otsego, and Martin school districts.',
      buttonText: 'Financial Help',
    },
    {
      titleLeft: 'Education',
      symbol: faGraduationCap,
      titleRight: 'We teach to...',
      content:
        'Help you take control of your financial life, obtain and maintain stability, obtain a GED, technology skills, cooking skills, and much more.',
      buttonText: 'Education',
    },
  ];

  return (
    <section className={styles.cardContainer}>
      {cardProps.map((card: ICollectionCardProps) => (
        <div className={styles.cardElement} key={card.titleLeft}>
          <div className={styles.cardLeft}>
            <FontAwesomeIcon
              icon={card.symbol}
              className={styles.icon}
              size="3x"
            />
            <h2>{card.titleLeft}</h2>
          </div>
          <div className={styles.cardRight}>
            <h2>{card.titleRight}</h2>
            <p>{card.content}</p>
            <button>
              <Link href="/">
                <a>{card.buttonText}</a>
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CollectionCard;
