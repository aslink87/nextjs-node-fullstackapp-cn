import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import styles from '../styles/Home.module.scss';
import Programs from '../components/communityprograms/Programs';

const CommunityPrograms: NextPageWithLayout = () => {
  return (
    <section className={styles.home} data-testid="programs-page">
      <Programs />
    </section>
  );
};

export default CommunityPrograms;

CommunityPrograms.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
