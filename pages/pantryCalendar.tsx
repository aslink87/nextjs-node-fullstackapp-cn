import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import prisma from '../lib/prisma';
import styles from '../styles/Home.module.scss';
import PantryCalendarComponent from 'components/pantryCalendar/PantryCalendar';

export interface IPantryCalendarProps {
  date: string;
  doc: string;
  index: number;
}

export interface IPantryCalendarData {
  calendar: IPantryCalendarProps[];
}

const PantryCalendar: NextPageWithLayout<IPantryCalendarData> = ({
  calendar,
}) => {
  return (
    <section className={styles.home} data-testid="pantrycalendar-page">
      <PantryCalendarComponent calendar={calendar} />
    </section>
  );
};

export default PantryCalendar;

PantryCalendar.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const calendar = await prisma.pantrycalendar.findMany();

  return {
    props: {
      calendar,
    },
    revalidate: 60,
  };
}
