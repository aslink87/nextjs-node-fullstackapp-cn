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
  let context = 'new';
  // prismaNewHandler adds new testimony to DB
  const prismaNewHandler = async (result: any, pathFile: string) => {
    try {
      await prisma.testimonies.create({
        data: {
          content: result.field.content,
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
  const prismaUpdateHandler = async (result: any, pathFile: string) => {
    console.log(result);
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

  const handleTestimony = async (context: string) => {
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
      if (context === 'new') {
        console.log('new testimony');
        prismaNewHandler(result, pathFile);
      } else if (context === 'update') {
        prismaUpdateHandler(result, pathFile);
        console.log('update testimony');
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Upload Error' + error });
    }
  };

  //TODO: figure out how to destructure the formData from the frontend and pass the ID to update and delete handlers,
  // update if logic where possible
  if (req.method === 'POST') {
    handleTestimony(context);
  } else if (req.method === 'PUT') {
    // let context = 'update';
    console.log('update');
  } else if (req.method === 'DELETE') {
    console.log('delete');
  } else {
    return res.status(400).json('Unable to update Testimony');
  }
}
