import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import Hero from 'components/hero/Hero';
import prisma from '../lib/prisma';
import HomepageCollection from 'components/homepageMiddle/HomepageCollection';
import HomepageCards from 'components/homepageBottom/HomepageCards';

interface IHomeProps {
  news: {
    title: string;
    content: string;
    link?: string;
    video?: string;
  };
}

const Home: NextPageWithLayout<IHomeProps> = ({ news }) => {
  return (
    <section className={styles.home}>
      <Hero news={news} />
      <HomepageCollection />
      <HomepageCards />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const news = await prisma.news.findUnique({
    where: {
      index: 1,
    },
  });

  return {
    props: {
      news,
    },
    revalidate: 60,
  };
}
