import express from 'express';
import bodyParser from 'body-parser';

import { sequelize } from './models';

import productsRoute from './routes/products.route';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/products', productsRoute);

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log(`DB connected, Server already UP`);
});
