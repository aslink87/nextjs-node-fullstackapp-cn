import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'
import { INews } from '../../lib/types';

interface INewsData extends NextApiRequest {
  body: INews
}

export default async function handler(
  req: INewsData,
  res: NextApiResponse
) {

  // update News object
  const updateNews = async () => {
    const news = await prisma.news.update({
      where: { index: 1 },
      data: {
        title: req.body.title,
        content: req.body.content,
        link: req.body.link,
        video: req.body.video
      }
    }).catch((e) => {
      console.log(e)
      return res.status(500).json('Update Error')
    })
    return res.status(200).json(news)
  }


  if (req.method === 'POST' && req.body.title.length >= 3 && req.body.content.length > 5) {
    updateNews()
  } else {
    return res.status(400).json('Unable to update News post')
  }
}
