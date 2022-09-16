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
  const prismaHandler = async (result: any, pathFile: string) => {
    try {
      await prisma.newsletter.create({
        data: {
          title: result.field.title,
          doc: pathFile,
          date: new Date().toISOString().split('T')[0],
        },
      });
      res.status(200).json({ message: 'File Uploaded Successfully' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with new image' });
    }
  };
  const addNewsletter = async () => {
    try {
      const options = {
        uploadDir: './uploads',
      };

      // parse incoming document and return result and filepath to pass on to prismaHandler
      const form = new formidable.IncomingForm(options);
      let pathFile = '';
      // eslint-disable-next-line prettier/prettier
      const result = await new Promise(function(resolve, reject) {
        form.parse(req, (error, field, file) => {
          if (error) {
            res.status(500).json({ message: 'Error parsing file' });
            return reject(error);
          }
          const path: any = file[Object.keys(file)[0]];
          let filepath = path.filepath;
          pathFile = filepath;
          resolve({ file, field });
        });
      });

      prismaHandler(result, pathFile);
    } catch (error) {
      console.log(error);
      return res.status(500).send('Upload Error' + error);
    }
  };

  if (req.method === 'POST') {
    addNewsletter();
  } else {
    return res.status(400).json('Unable to update Newsletters');
  }
}
