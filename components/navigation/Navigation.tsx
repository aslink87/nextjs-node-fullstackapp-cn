import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileToggle from './MobileToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '../../public/logo_a.png';
import styles from './Navigation.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
export interface INavigation extends React.ComponentPropsWithoutRef<'header'> { }

const NavigationBar: React.FC<INavigation> = ({ ...headerProps }) => {
  const [mobileActive, setMobileActive] = useState(false);

  const aboutDropdown = (
    <div className={styles.aboutDropdown}>
      <Link href={'./newsletter'}>
        <a>Newsletters</a>
      </Link>
    </div>
  );

  const servicesDropdown = (
    <div className={styles.servicesDropdown}>
      <Link href={'./communityprograms'}>
        <a>Local Programs</a>
      </Link>
    </div>
  );

  const supportDropdown = (
    <div className={styles.supportDropdown}>
      <Link href={'./partners'}>
        <a>Church Partners</a>
      </Link>
    </div>
  );

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      class: 'about',
      auth: false,
      mobile: true,
      mobileOnly: false,
      dropdown: aboutDropdown,
    },
    {
      name: 'Services',
      path: '/assistance',
      class: 'services',
      auth: false,
      mobile: true,
      mobileOnly: false,
      dropdown: servicesDropdown,
    },
    {
      name: 'Support Us',
      path: '/support',
      class: 'support',
      auth: false,
      mobile: true,
      mobileOnly: false,
      dropdown: supportDropdown,
    },
    {
      name: 'Blog',
      path: '/blog',
      class: 'blog',
      auth: false,
      mobile: true,
      mobileOnly: false,
    },
    {
      name: 'Admin Panel',
      path: '/admin',
      class: 'admin',
      auth: true,
      mobile: false,
    },
    {
      name: 'Calendar',
      path: '/calendar',
      class: 'calendar',
      auth: false,
      mobileOnly: true,
    },
    {
      name: 'Newsletters',
      path: '/newsletter',
      class: 'newsletter',
      auth: false,
      mobileOnly: true,
    },
    {
      name: 'FAQ',
      path: '/faq',
      class: 'faq',
      auth: false,
      mobileOnly: true,
    },
    {
      name: 'Church Partners',
      path: '/partners',
      class: 'partners',
      auth: false,
      mobileOnly: true,
    },
    {
      name: 'Local Programs',
      path: '/communityprograms',
      class: 'programs',
      auth: false,
      mobileOnly: true,
    },
  ];

  const isAuth = false;

  useEffect(() => {
    if (mobileActive) {
      document
        .getElementById('sidedrawer')
        ?.classList.replace('sidedrawer', 'sidedrawerActive');
    } else {
      document
        .getElementById('sidedrawer')
        ?.classList.replace('sidedrawerActive', 'sidedrawer');
    }
  }, [mobileActive]);

  const onMobileActiveHandler = (mobileToggle: boolean) => {
    setMobileActive(mobileToggle);
  };

  const xmark = (
    <button onClick={() => onMobileActiveHandler(!mobileActive)}>
      <FontAwesomeIcon icon={faXmark} className={styles.xmark} size="3x" />
    </button>
  );

  /* eslint-disable prettier/prettier */
  return (
    <header {...headerProps} className={'w-full flex flex-row justify-between'}>
      <div data-testid="nav" className={styles.nav}>
        <div className={styles.donateContainerMobile}>
          <h1 className={styles.donate}>
            <Link href="/">
              <a><p>Donate</p></a>
            </Link>
          </h1>
        </div>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <div className={styles.image}>
              <Image
                src={logo}
                layout="responsive"
                alt="CN Logo"
              />
            </div>
          </Link>
        </div>
        <div className={styles.branding}>
          <Link href="/">
            <a>
              <h1>Christian</h1>
              <h1 className={styles.brandingSecondary}>Neighbors</h1>
            </a>
          </Link>
        </div>
        <ul className={styles.navItems}>
          <div className={styles.donateContainer}>
            <h1 className={styles.donate}>
              <Link href="/">
                <a><p>Donate</p></a>
              </Link>
            </h1>
          </div>
          {isAuth
            ? navLinks
              .filter((link) => !link.mobileOnly)
              .map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))
            : navLinks
              .filter((link) => link.auth === isAuth && !link.mobileOnly)
              .map((link) => (
                <li key={link.name} className={styles[link.class]}>
                  <>
                    <Link href={link.path}>{link.name}</Link>
                    {link.dropdown ? link.dropdown : null}
                  </>
                </li>
              ))}
        </ul>
        <MobileToggle setMobileActive={onMobileActiveHandler} />
      </div>
      {mobileActive ?
        <div className={`${styles.sidedrawer} ${mobileActive ? styles.sidedrawerActive : ''}`} id='sidedrawer'>
          <div className={styles.drawerToggle}>
            {xmark}
          </div>
          {
            navLinks
              .filter((link) => link.mobileOnly || link.mobile)
              .map((link) => (
                <li key={link.name} className={styles[link.class + 'Mobile']}>
                  <>
                    <Link href={link.path}><h1 onClick={() => onMobileActiveHandler(!mobileActive)}>{link.name}</h1></Link>
                  </>
                </li>
              ))
          }
        </div>
        : null
      }
    </header >
  );
};

export default NavigationBar;
