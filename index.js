import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

import { sequelize } from './models';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log(`DB connected, Server already UP`);
});
