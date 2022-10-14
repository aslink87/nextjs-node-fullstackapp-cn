import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Terri from '../../public/terri.jpg';
import Eric from '../../public/eric.png';
import Kim from '../../public/kim.jpg';
import Shannon from '../../public/shannon.jpg';
import Amy from '../../public/amy.jpg';
import Adam from '../../public/adam.png';
import Debbie from '../../public/debbie.png';
import styles from './AboutStaff.module.scss';
import Link from 'next/link';

interface IGridElement {
  id: number;
  name: string;
  title: string;
  content: string;
  email: string;
  // enter 0 if no phone #
  phone: number;
  image: StaticImageData;
}

const AboutStaff: React.FC = () => {
  const staffData: IGridElement[] = [
    {
      id: 1,
      name: 'Terri Shaler',
      title: 'Executive Director',
      content:
        'Over 20 years of service at Christian Neighbors, Terri is happy to assist with business questions.',
      email: 'tshaler',
      phone: 101,
      image: Terri,
    },
    {
      id: 2,
      name: 'Eric Hoffman',
      title: 'Development Coordinator',
      content:
        'Contact to have someone speak at your group or for donation questions',
      email: 'ehoffman',
      phone: 100,
      image: Eric,
    },
    {
      id: 3,
      name: 'Kim Shafer',
      title: 'Housing Program Director',
      content: 'Kim oversees our housing and homeless programs',
      email: 'kshafer',
      phone: 102,
      image: Kim,
    },
    {
      id: 4,
      name: 'Shannon Zabaldo',
      title: 'Housing Specialist',
      content: 'Shannon can help with food and financial assistance',
      email: 'szabaldo',
      phone: 106,
      image: Shannon,
    },
    {
      id: 5,
      name: 'Amy VanPutten',
      title: 'Food Program Director',
      content: 'Reach out to Amy for food pantry drop-offs',
      email: 'avanputten',
      phone: 103,
      image: Amy,
    },
    {
      id: 6,
      name: 'Adam Slinkman',
      title: 'IT Manager',
      content: 'Contact Adam for technology questions',
      email: 'aslinkman',
      phone: 109,
      image: Adam,
    },
    {
      id: 7,
      name: 'Debbie Woodstock',
      title: 'Food Program Assistant',
      content: 'Debbie works hard to help our neighbors stay fed',
      email: 'dwoodstock',
      phone: 0,
      image: Debbie,
    },
  ];

  const email = (arg: string) => {
    if (arg == 'aslinkman') {
      return (
        <Link href={`mailto:adam@slinkman.net`}>
          <a>adam@slinkman.net</a>
        </Link>
      );
    } else if (arg == 'dwoodstock') {
      return null;
    } else
      return (
        <Link href={`mailto:${arg}@christianneighbors.org`}>
          <a>{`${arg}@christianneighbors.org`}</a>
        </Link>
      );
  };

  return (
    <section className={styles.container} data-testid="aboutstaff-component">
      <h1>Meet the Team</h1>
      <div className={styles.flexContainer}>
        {staffData.map((person: IGridElement) => (
          <div key={person.id} className={styles.flexElement}>
            <Image src={person.image} layout="responsive" alt="CN Logo" />
            <div className={styles.lowerflex}>
              <div className={styles.lowerflexContent}>
                <h2>{person.name}</h2>
                <h2 className={styles.subheading}>{person.title}</h2>
                <p>{person.content}</p>
                {email(person.email)}
                {person.phone > 0 ? (
                  <p>(269)685-4166 ext {person.phone}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStaff;
