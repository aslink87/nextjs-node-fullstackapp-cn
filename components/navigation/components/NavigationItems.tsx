import Link from 'next/link'

import styles from './Navigation.module.scss'

export interface INavItems {
  id: string,
  text: string,
  link: string,
  auth: boolean,
  mobile: boolean
}

export interface INavigationItems {
  isAuth: boolean
}

const navItems: INavItems[] = [
  { id: 'about', text: 'About', link: '/about', auth: false, mobile: false }
]

const NavigationItems: React.FC<INavigationItems> = ({ isAuth }) => {

  const nonAuthNavItems =
    navItems
      .filter((item: INavItems) => item.auth === isAuth)
      .map((item: INavItems) => {
        return (
          <li key={item.id}
          >
            <Link href={item.link}>
              <a>
                {item.text}
              </a>
            </Link>
          </li>
        )
      })

  if (isAuth === false) {
    return (
      <ul>{nonAuthNavItems}</ul>
    )
  } else {
    return (
      <p>hello mom</p>
    )
  }
};

export default NavigationItems;

