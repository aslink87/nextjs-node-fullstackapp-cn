import { INewslettersData } from 'pages/newsletter';

const base: INewslettersData = {
  newsletters: [
    {
      index: 0,
      date: '2022-10-06',
      title: 'July E-News',
      doc: '/home/adam/Development/nextjs-cnwebsite/uploads/ed9a5211a2236f3396c86e702.pdf',
    },
    {
      index: 1,
      date: '2022-10-06',
      title: 'July 2022 Newsletter',
      doc: '/home/adam/Development/nextjs-cnwebsite/uploads/ed9a5211a2236f3396c86e702.pdf',
    },
    {
      index: 2,
      date: '2022=10-06',
      title: 'February 2022 Newsletter',
      doc: '/home/adam/Development/nextjs-cnwebsite/uploads/ed9a5211a2236f3396c86e702.pdf',
    },
  ],
};

export const mockNewsletterProps = {
  base,
};
