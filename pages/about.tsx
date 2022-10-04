import AboutTop from 'components/aboutTop/AboutTop';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.home}>
      <AboutTop />
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
