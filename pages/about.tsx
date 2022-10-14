import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import AboutTop from '../components/aboutTop/AboutTop';
import AboutC from '../components/aboutCs/AboutC';
import AboutGrid from '../components/aboutGrid/AboutGrid';
import AboutStaff from '../components/aboutStaff/AboutStaff';
import styles from '../styles/Home.module.scss';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.home} data-testid="about-page">
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
