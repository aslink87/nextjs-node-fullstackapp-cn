import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logo_a.png';
import styles from './Navigation.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
export interface INavigation extends React.ComponentPropsWithoutRef<'header'> { }

const NavigationBar: React.FC<INavigation> = ({ ...headerProps }) => {
  const navLinks = [
    {
      name: 'About',
      path: '/about',
      auth: false,
      mobile: true,
    },
    {
      name: 'Services',
      path: '/services',
      auth: false,
      mobile: true,
    },
    {
      name: 'Support Us',
      path: '/support',
      auth: false,
      mobile: true,
    },
    {
      name: 'Blog',
      path: '/blog',
      auth: false,
      mobile: true,
    },
    {
      name: 'Admin Panel',
      path: '/admin',
      auth: true,
      mobile: true,
    },
  ];

  const isAuth = false;
  /* eslint-disable prettier/prettier */
  return (
    <header {...headerProps} className={'w-full flex flex-row justify-between'}>
      <div data-testid="nav" className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <div className="logo-link">
              <Image
                src={logo}
                layout="responsive"
                alt="CN Logo"
                className={styles.image}
              />
            </div>
          </Link>
        </div>
        <div className={styles.spacer} />
        <div className={styles.branding}>
          <h1 className='text-gray-500'>Christian</h1>
          <h1 className={styles.brandingSecondary}>Neighbors</h1>
        </div>
        <div className={styles.spacer} />
        <ul className={styles.navItems}>
          {isAuth
            ? navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))
            : navLinks
              .filter((link) => link.auth === isAuth)
              .map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
        </ul>
      </div>
    </header>
  );
};

export default NavigationBar;
