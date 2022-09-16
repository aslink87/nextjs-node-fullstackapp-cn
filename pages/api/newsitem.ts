import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { IImage } from '../../lib/types';
import formidable from 'formidable';

interface INewsItemData extends NextApiRequest {
  body: IImage;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: INewsItemData,
  res: NextApiResponse
) {
  // prismaHandler updates DB object values including new filePath
  const prismaHandler = (pathFile: string) => {
    try {
      prisma.newsitem.update({
        where: { index: 1 },
        data: {
          doc: pathFile,
        },
      });
      return res.status(200).json({ message: 'File Uploaded Successfully' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with new image' });
    }
  };

  const updateNewsItem = async () => {
    try {
      const options = {
        uploadDir: './uploads',
      };

      // parse incoming document and return filepath to pass on to prismaHandler
      const form = new formidable.IncomingForm(options);
      let pathFile = '';
      form.parse(req, (error, file) => {
        if (error) {
          return res.status(500).json({ message: 'Error parsing file' });
        }
        const path: any = file[Object.keys(file)[0]];
        let filepath = path.filepath;
        pathFile = filepath;
      });
      return prismaHandler(pathFile);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Upload Error' + error });
    }
  };

  if (req.method === 'POST') {
    updateNewsItem();
  } else {
    return res.status(400).json({ message: 'Unable to update News Item' });
  }
}
