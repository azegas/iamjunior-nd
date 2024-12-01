import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { Express } from 'express';

const globalMiddlewares = (app: Express) => {
  // middleware - cors (allow requests from the frontend, all ips. CHANGE THIS IN PROD)
  app.use(cors());

  app.use(express.static(path.join(__dirname, '../public')));

  // middleware - custom middleware before processing requests
  app.use((req, res, next) => {
    // console.log('hello from custom middleware');
    next();
  });

  // middleware - parses(decrypts, decompresses) JSON bodies
  app.use(express.json());

  // middleware - logs request details
  app.use(morgan('common'));
};

export { globalMiddlewares };
