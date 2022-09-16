import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { IBlog } from '../../lib/types';
import formidable from 'formidable';

interface IBlogData extends NextApiRequest {
  body: IBlog;
}

// turn off body parser so that formData is consumed properly
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: IBlogData, res: NextApiResponse) {
  // GET blogs
  const getBlogsHandler = async () => {
    try {
      const result = await prisma.blog.findMany({
        orderBy: {
          date: 'desc',
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching blogs.' });
    }
  };

  // Add blog
  const addBlogsHandler = async (pathFile: string) => {
    try {
      const result = await prisma.blog.create({
        data: {
          date: new Date().toISOString().split('T')[0],
          title: 'here is a blog title',
          content: 'look at this awesome blog post',
          img: pathFile,
          link: 'www.google.com',
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Error adding blog.' });
    }
  };

  const blogImageHandler = async () => {
    let pathFile = '';
    const options = {
      uploadDir: './uploads',
    };
    const form = new formidable.IncomingForm(options);
    // const fileValidate = await new Promise(function (resolve, reject) {
    //   form.parse(req, (error, field, file) => {
    //     if (error) {
    //       res.status(500).json({ message: 'Error parsing file' });
    //       return reject(error);
    //     }
    //     const path: any = file[Object.keys(file)[0]];
    //     let filepath = path.filepath;
    //     pathFile = filepath;
    //     resolve({ file, field });
    //   });
    // });
    if (typeof pathFile === 'string' && pathFile === '') {
      console.log('no image');
    } else {
      console.log('image found', pathFile);
      addBlogsHandler(pathFile);
    }
  };

  // GET works, POST needs title, content, and link, passed to it from the frontend. What will this look like?
  // PUT and DELETE still need completed
  if (req.method === 'GET') {
    getBlogsHandler();
  } else if (req.method === 'POST') {
    console.log('add blog');
    blogImageHandler();
  } else if (req.method === 'PUT') {
    console.log('update blog');
  } else if (req.method === 'DELETE') {
    console.log('delete blog');
  } else {
    return res.status(400).json('Unable to update Blog');
  }
}
