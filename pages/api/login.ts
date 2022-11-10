import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

interface ILogin extends NextApiRequest {
  body: any;
}

export default async function handler(req: ILogin, res: NextApiResponse) {
  // update News object
  const login = async () => {
    const response = await prisma.admins.findMany().catch((e) => {
      console.log(e);
      return res.status(500).json({ message: 'Error updating Database' });
    });
    return res.status(200).json(response);
  };

  if (req.method === 'POST') {
    login();
  } else {
    return res.status(400).json({ message: 'Unable to login.' });
  }
}
