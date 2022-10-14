import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import SupportComponent from '../components/support/Support';
import prisma from '../lib/prisma';
import { INeeds } from '../lib/types';
import styles from '../styles/Home.module.scss';

export interface ISupportProps {
  needs: INeeds[];
}

const Support: NextPageWithLayout<ISupportProps> = ({ needs }) => {
  return (
    <section className={styles.home} data-testid="support-page">
      <SupportComponent needs={needs} />
    </section>
  );
};

export default Support;

Support.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const needs = await prisma.needs.findMany();

  return {
    props: {
      needs,
    },
    revalidate: 60,
  };
}
