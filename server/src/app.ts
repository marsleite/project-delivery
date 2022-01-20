/* eslint-disable import/extensions */
import cors from 'cors';

import express from 'express';
// eslint-disable-next-line import/no-unresolved
import router from './routes/index';

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(express.json());
  app.use(cors());

  app.use(router);

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

main().catch((err) => console.log(err.message));
