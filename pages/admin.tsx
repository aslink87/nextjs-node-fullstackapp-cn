import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import { useSession } from 'next-auth/react';
import styles from '../styles/Home.module.scss';
import AdminComponent from 'components/admin/Admin';
import { signIn, signOut } from 'next-auth/react';

const Admin: NextPageWithLayout = () => {
  const { data } = useSession();

  const verifyUser = () => {
    if (data) {
      return <AdminComponent />;
    } else return <h1>not logged in</h1>;
  };
  return (
    <section className={styles.home} data-testid="faq-page">
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
      {verifyUser()}
    </section>
  );
};

export default Admin;

Admin.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
