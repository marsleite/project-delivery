const express = require('express');

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
};

main().catch((err) => console.log(err.message));
