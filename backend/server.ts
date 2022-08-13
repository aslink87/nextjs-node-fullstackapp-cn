// const express = require('express');
import express, { Request, Response } from 'express';
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Hello Mom');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
