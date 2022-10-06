import AboutTop from 'components/aboutTop/AboutTop';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import AboutC from 'components/aboutCs/AboutC';
import AboutGrid from 'components/aboutGrid/AboutGrid';
import AboutStaff from 'components/aboutStaff/AboutStaff';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.home}>
      <AboutTop />
      <AboutC />
      <AboutGrid />
      <AboutStaff />
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
