import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import prisma from '../lib/prisma';
import CalendarComponent from '../components/calendar/Calendar';
import styles from '../styles/Home.module.scss';

export interface ICalendarProps {
  calendarHead?: {
    title: string;
    content: string;
    link?: string;
    video?: string;
  };
  supper?: {
    doc: string;
  };
}

const Calendar: NextPageWithLayout<ICalendarProps> = ({
  calendarHead,
  supper,
}) => {
  return (
    <section className={styles.home} data-testid="calendar-page">
      <CalendarComponent calendarHead={calendarHead} supper={supper} />
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

  const supper = await prisma.suppers.findUnique({
    where: {
      index: 1,
    },
  });

  return {
    props: {
      calendarHead,
      supper,
    },
    revalidate: 60,
  };
}
