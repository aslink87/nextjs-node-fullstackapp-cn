import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { IImage } from '../../lib/types';
import formidable from 'formidable';

interface IPantryCalendar extends NextApiRequest {
  body: IImage;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: IPantryCalendar,
  res: NextApiResponse
) {
  // prismaHandler updates DB object values including new filePath
  const prismaHandler = async (pathFile: string) => {
    try {
      await prisma.pantrycalendar.update({
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

  const addPDF = async () => {
    const options = {
      uploadDir: './uploads',
      keepExtensions: true,
    };

    // parse incoming document and return filepath to pass on to prismaHandler
    const form = new formidable.IncomingForm(options);
    let pathFile = '';

    form.parse(req, (error, file) => {
      if (error) {
        res.status(500).json({ message: 'Error parsing file' + error });
      } else {
        const path: any = file[Object.keys(file)[0]];
        let filepath = path.filepath;
        pathFile = filepath;
        prismaHandler(pathFile);
      }
    });
    res.status(200).json({ message: 'File Uploaded Successfully' });
  };

  if (req.method === 'POST') {
    addPDF();
  } else {
    return res
      .status(400)
      .json({ message: 'Unable to update Pantry Calendar' });
  }
}
