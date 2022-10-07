import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import prisma from '../lib/prisma';
import CalendarComponent from '../components/calendar/Calendar';
import styles from '../styles/Home.module.scss';

export interface ICalendarProps {
  calendarHead: {
    title: string;
    content: string;
    link?: string;
    video?: string;
  };
}

const Calendar: NextPageWithLayout<ICalendarProps> = ({ calendarHead }) => {
  return (
    <section className={styles.home}>
      <CalendarComponent calendarHead={calendarHead} />
    </section>
  );
};

export default Calendar;

Calendar.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};

export async function getStaticProps() {
  const calendarHead = await prisma.calendar.findUnique({
    where: {
      index: 1,
    },
  });

  return {
    props: {
      calendarHead,
    },
    revalidate: 60,
  };
}
