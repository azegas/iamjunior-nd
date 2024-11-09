const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const globalMiddlewares = (app) => {
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

module.exports = {
  globalMiddlewares,
};
