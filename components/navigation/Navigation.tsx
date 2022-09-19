import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileToggle from './MobileToggle';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import logo from '../../public/logo_a.png';
import styles from './Navigation.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
export interface INavigation extends React.ComponentPropsWithoutRef<'header'> { }

const NavigationBar: React.FC<INavigation> = ({ ...headerProps }) => {
  const aboutDropdown = (
    <div className={styles.aboutDropdown}>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
    </div>
  );

  const servicesDropdown = (
    <div className={styles.servicesDropdown}>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
    </div>
  );

  const supportDropdown = (
    <div className={styles.supportDropdown}>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
      <p>item 1</p>
    </div>
  );

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      class: 'about',
      auth: false,
      mobile: true,
      dropdown: aboutDropdown,
    },
    {
      name: 'Services',
      path: '/services',
      class: 'services',
      auth: false,
      mobile: true,
      dropdown: servicesDropdown,
    },
    {
      name: 'Support Us',
      path: '/support',
      class: 'support',
      auth: false,
      mobile: true,
      dropdown: supportDropdown,
    },
    {
      name: 'Blog',
      path: '/blog',
      class: 'blog',
      auth: false,
      mobile: true,
    },
    {
      name: 'Admin Panel',
      path: '/admin',
      class: 'admin',
      auth: true,
      mobile: true,
    },
  ];

  const isAuth = false;
  // const arrowDown = (
  //   <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
  // );

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
          <Link href="/">
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
          <h1>Christian</h1>
          <h1 className={styles.brandingSecondary}>Neighbors</h1>
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
            ? navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))
            : navLinks
              .filter((link) => link.auth === isAuth)
              .map((link) => (
                <li key={link.name} className={styles[link.class]}>
                  <>
                    <Link href={link.path}>{link.name}</Link>
                    {link.dropdown ? link.dropdown : null}
                  </>
                </li>
              ))}
        </ul>
        <MobileToggle />
      </div>
    </header>
  );
};

export default NavigationBar;
