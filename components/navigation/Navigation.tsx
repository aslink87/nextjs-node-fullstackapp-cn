import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import logo from '../../public/logo_a.png'
import styles from './Navigation.module.scss'

const isAuth = false
export const navLinks = [
  {
    name: "About",
    path: "/about",
    auth: false,
    mobile: true
  },
  {
    name: "Services",
    path: "/services",
    auth: false,
    mobile: true
  },
  {
    name: "Support Us",
    path: "/support",
    auth: false,
    mobile: true
  },
  {
    name: "Blog",
    path: "/blog",
    auth: false,
    mobile: true
  },
  {
    name: "Admin Panel",
    path: "/admin",
    auth: true,
    mobile: true
  },
]

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <li>
    <Link href={path}>
      <a>{children}</a>
    </Link>
  </li>
)

const NavigationBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src={logo} layout='responsive' alt='CN Logo' className={styles.image} />
        </Link>
      </div>
      <div className={styles.spacer} />
      <div className={styles.branding}>
        <h1>Christian</h1>
        <h1 className={styles.brandingSecondary}>Neighbors</h1>
      </div >
      <div className={styles.spacer} />
      <ul className={styles.navItems}>
        {
          isAuth ? (
            navLinks.map(({ name, path }) => (
              <NavLink key={name} path={path}>{name}</NavLink>
            ))
          ) :
            navLinks
              .filter((item) => item.auth === isAuth)
              .map(({ name, path }) => (
                <NavLink key={name} path={path}>{name}</NavLink>
              ))
        }
      </ul>
    </div >
  )
}

export default NavigationBar;
