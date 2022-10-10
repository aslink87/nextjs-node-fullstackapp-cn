import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { IImage } from '../../lib/types';
import formidable from 'formidable';

interface ISupperData extends NextApiRequest {
  body: IImage;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: ISupperData, res: NextApiResponse) {
  const prismaHandler = async (pathFile: string) => {
    try {
      await prisma.suppers.update({
        where: { index: 1 },
        data: {
          doc: pathFile,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with new image' });
    }
  };

  const addSupperImage = async () => {
    const options = {
      uploadDir: './public/uploads',
      keepExtensions: true,
    };

    // parse incoming document and return result and filepath to pass on to prismaHandler
    const form = new formidable.IncomingForm(options);
    let pathFile = '';

    form.parse(req, (error, files, fields) => {
      if (error) {
        res.status(500).json({ message: 'Error parsing file' + error });
      } else {
        const path: any = fields[Object.keys(fields)[0]];
        console.log('Path is: ', path.newFilename);
        let filepath = '/uploads/' + path.newFilename;
        pathFile = filepath;

        prismaHandler(pathFile);
      }
    });
    return res.status(200).json({ message: 'File Uploaded Successfully' });
  };

  if (req.method === 'POST') {
    addSupperImage();
  } else {
    return res.status(400).json({ message: 'Unable to update Newsletters' });
  }
}
