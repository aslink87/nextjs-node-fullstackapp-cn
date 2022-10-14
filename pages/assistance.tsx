import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import AssistanceComponent from '../components/assistance/Assistance';

const Assistance: NextPageWithLayout = () => {
  return (
    <section className={styles.home} data-testid="assistance-page">
      <AssistanceComponent />
    </section>
  );
};

export default Assistance;

Assistance.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
