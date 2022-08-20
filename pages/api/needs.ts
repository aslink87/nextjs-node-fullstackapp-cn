import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'
import { INeeds } from '../../lib/types';

interface INeedsData extends NextApiRequest {
  body: INeeds
}

export default async function handler(
  req: INeedsData,
  res: NextApiResponse
) {

  // update News object
  const updateNeeds = async () => {
    const news = await prisma.needs.update({
      where: { index: 1 },
      data: {
        item0: req.body.item0,
        item1: req.body.item1,
        item2: req.body.item2,
        item3: req.body.item3,
        item4: req.body.item4,
        item5: req.body.item5,
        item6: req.body.item6,
        item7: req.body.item7,
        item8: req.body.item8,
        item9: req.body.item9,
      }
    }).catch((e) => {
      console.log(e)
      return res.status(500).json({ message: 'Error updating Database' })
    })
    return res.status(200).json(news)
  }


  if (req.method === 'POST' && req.body.item0) {
    updateNeeds()
  } else {
    return res.status(400).json({ message: 'Unable to update Needs' })
  }
}
