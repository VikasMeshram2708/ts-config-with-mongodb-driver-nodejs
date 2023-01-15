/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';

import morgan from 'morgan';

import auth from './API/auth';

// import { MessageResponse } from './Interfaces/MessageResponse';

const app = express();

require('dotenv').config();

app.use(express.json());

app.use(morgan('dev'));

const {
  PORT,
} = process.env;

app.use('/api/auth', auth);

// app.get<unknown, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: 'Hello,World!',
//   });
// });

const port = PORT;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
