import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import Faqs from 'components/faqs/Faqs';

const Faq: NextPageWithLayout = () => {
  return (
    <section className={styles.home}>
      <Faqs />
    </section>
  );
};

export default Faq;

Faq.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
