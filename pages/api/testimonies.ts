import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { ITestimonies } from '../../lib/types';
import formidable from 'formidable';

interface ITestimoniesData extends NextApiRequest {
  body: ITestimonies;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: ITestimoniesData,
  res: NextApiResponse
) {
  // prismaNewHandler adds new testimony to DB
  const prismaNewHandler = async (content: string, pathFile: string) => {
    try {
      await prisma.testimonies.create({
        data: {
          content,
          doc: pathFile,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with new testimony' });
    }
  };

  // prismaUpdateHandler updates existing testimony in DB
  const prismaUpdateHandler = async (content: string, pathFile: string) => {
    try {
      await prisma.testimonies.update({
        where: { id: '1' },
        data: {
          content: 'look at this amazing content',
          doc: pathFile,
        },
      });
      return res.status(200).json({ message: 'File Uploaded Successfully' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error updating server with existing testimony' });
    }
  };

  const handleTestimony = (context: string) => {
    const options = {
      uploadDir: './uploads',
      keepExtensions: true,
    };

    // parse incoming document and get content and filepath to pass on to prismaHandler
    const form = new formidable.IncomingForm(options);
    let pathFile = '';

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: 'Error parsing file' });
      } else {
        const path: any = files[Object.keys(files)[0]];
        let filepath = path.filepath;
        pathFile = filepath;
        const content: string = fields[Object.keys(fields)[0]] as string;

        if (context === 'new') {
          // if new testimony create new record in db
          prismaNewHandler(content, pathFile);
        } else if (context === 'update') {
          prismaUpdateHandler(content, pathFile);
        }
      }
    });
    res.status(200).json({ message: 'File Uploaded Successfully' });
  };

  if (req.method === 'POST') {
    handleTestimony('new');
  } else if (req.method === 'PUT') {
    //TODO: update logic
    console.log('update');
  } else if (req.method === 'DELETE') {
    //TODO: delete logic
    console.log('delete');
  } else {
    return res.status(400).json('Unable to update Testimony');
  }
}
