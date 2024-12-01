import 'dotenv/config';
import { connectToDB } from './db';
import express from 'express';

export const startServer = async (app: express.Application) => {
  try {
    await connectToDB(); // Connect to the database
    // if connection is successful, start the server
    const host =
      process.env.NODE_ENV === 'production'
        ? process.env.API_HOST_PROD
        : `${process.env.API_PROTOCOL_LOCAL}://${process.env.API_HOST_LOCAL}:${process.env.API_PORT_LOCAL}`;
    app.listen(
      // if production, listen on port 0 to let the cloud provider choose the port
      process.env.NODE_ENV === 'production' ? 0 : process.env.API_PORT_LOCAL,
      () => {
        console.log(`Server is running on ${host}`);
      },
    );
  } catch {
    // eslint-disable-next-line no-console
    console.error('Failed to start the server:');
  }
};
