import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { ICalendar } from '../../lib/types';

interface ICalendarData extends NextApiRequest {
  body: ICalendar;
}

export default async function handler(
  req: ICalendarData,
  res: NextApiResponse
) {
  // update Calendar object
  const updateCalendar = async () => {
    const calendar = await prisma.calendar
      .update({
        where: { index: 1 },
        data: {
          title: req.body.title,
          content: req.body.content,
          link: req.body.link,
          video: req.body.video,
        },
      })
      .catch((e) => {
        console.log(e);
        return res.status(500).json({ message: 'Update Error' });
      });
    return res.status(200).json(calendar);
  };

  if (
    req.method === 'POST' &&
    req.body.title.length >= 3 &&
    req.body.content.length > 5
  ) {
    updateCalendar();
  } else {
    return res.status(400).json({ message: 'Unable to update Calendar post' });
  }
}
