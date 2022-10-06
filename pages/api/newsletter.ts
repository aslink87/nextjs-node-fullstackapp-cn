import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { INewsletter } from '../../lib/types';
import formidable from 'formidable';

interface INewsletterData extends NextApiRequest {
  body: INewsletter;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: INewsletterData,
  res: NextApiResponse
) {
  // update Newsletter object

  // prismaHandler updates DB object values including new date, title, and filePath
  const prismaHandler = async (content: string, pathFile: string) => {
    try {
      await prisma.newsletter.create({
        data: {
          title: content,
          doc: pathFile,
          date: new Date().toISOString().split('T')[0],
          index: 100,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with new image' });
    }
  };
  const addNewsletter = async () => {
    const options = {
      uploadDir: './uploads',
      keepExtensions: true,
    };

    // parse incoming document and return result and filepath to pass on to prismaHandler
    const form = new formidable.IncomingForm(options);
    let pathFile = '';

    form.parse(req, (error, fields, file) => {
      if (error) {
        res.status(500).json({ message: 'Error parsing file' + error });
      } else {
        const path: any = file[Object.keys(file)[0]];
        let filepath = path.filepath;
        pathFile = filepath;
        const content: string = fields[Object.keys(fields)[0]] as string;

        prismaHandler(content, pathFile);
      }
    });
    res.status(200).json({ message: 'File Uploaded Successfully' });
  };

  if (req.method === 'POST') {
    //TODO: instead of posting a new newsletter, this should instead update 2 existing
    addNewsletter();
  } else {
    return res.status(400).json('Unable to update Newsletters');
  }
}
