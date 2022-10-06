import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import prisma from '../lib/prisma';
import styles from '../styles/Home.module.scss';
import Newsletter from 'components/newsletter/Newsletter';

export interface INewsletterProps {
  date: string;
  title: string;
  doc: string;
  index: number;
}

export interface INewslettersData {
  newsletters: INewsletterProps[];
}

const Newsletters: NextPageWithLayout<INewslettersData> = ({ newsletters }) => {
  return (
    <section className={styles.home}>
      <Newsletter newsletters={newsletters} />
    </section>
  );
};

export default Newsletters;

Newsletters.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const newsletters = await prisma.newsletter.findMany();

  return {
    props: {
      newsletters,
    },
    revalidate: 60,
  };
}
