import Link from 'next/link'
import { ReactNode } from 'react';

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
    <>
      <ul>
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
    </>
  )
}

export default NavigationBar;
