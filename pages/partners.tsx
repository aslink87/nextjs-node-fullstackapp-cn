import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import ChurchPartners from 'components/churchpartners/ChurchPartners';

const Partners: NextPageWithLayout = () => {
  return (
    <section className={styles.home} data-testid="faq-page">
      <ChurchPartners />
    </section>
  );
};

export default Partners;

Partners.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
