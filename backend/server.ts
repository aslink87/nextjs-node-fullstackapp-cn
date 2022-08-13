// const express = require('express');
import express, { Request, Response, NextFunction } from 'express';
const dotenv = require('dotenv');

// handle types
interface ErrorStatus extends Error {
  status: number;
}

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Hello Mom');
});

app.get("/api/", (req: Request, res: Response) => res.send("INDEX"));

// Error handling - Not sure if this works
app.use((err: ErrorStatus, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const status = res.statusCode || 500;
  const message = err.message
  const data = err.name;
  res.status(status).json({ message: message, data: data });
});

console.log("Environment is " + process.env.NODE_ENV);

app.listen(port, () => {
  console.log(`[server]: 🚀 Server is running at https://localhost:${port}`);
});
