import express from 'express';
import bodyParser from 'body-parser';

import { sequelize } from './models';
import { basicAuth, isAuthenticated } from './middlewares';

import productsRoute from './routes/products.route';
import cartsRoute from './routes/carts.route';
import usersRoute from './routes/users.route';
import authRoute from './routes/auth.route';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/products', basicAuth, productsRoute);
app.use('/api/v1/carts', isAuthenticated, cartsRoute);
app.use('/api/v1/users', basicAuth, usersRoute);
app.use('/api/v1/auth', authRoute);

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log(`DB connected, Server already UP`);
});
