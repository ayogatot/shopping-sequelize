# Shopping Cart

This app is basic backend app to CRUD productst, cart and item.

## How to run:

- Make sure you have `docker` installed
- To run the app simply just run `docker-compose up` from this folder and wait until `DB connected, Server already UP`
- Or run with `docker-compose up -d` and check the note bellow
- Backend is open on `http://localhost:5000`

`Note:` Mysql will take a several time to be ready and connected with the backend, the backend will wait for it. Before open `localhost:5000` make sure on your docker dashboard, the output of `container_name: sequelize-shop` is `DB connected, Server already UP`

## Tech Used:

- Backend:
  - Node.JS
  - Express
  - Sequelize
- Mysql

## Api Documentation:

- The postman docs is published [here](https://documenter.getpostman.com/view/6907335/TW76DQHg)
- Public link will be [here](https://www.getpostman.com/collections/d225e4ee79ccc42d4ae9)
- Or import from json collection from this folder
- `Products`: basic auth, to CRUD products table
- `Carts`: bearer token, to get User cart by userId from decoded token
- `CartItems`: bearer token, add item to user cart, update qty item, remove item from cart
- `Payment`: bearer token, checkout and confirmation simulation
- `Auth`: you need login first to get token, and use it for Authorization Bearer

## DB Design

- The database design is simple like this:
  ![DB Design](https://res.cloudinary.com/gatotman/image/upload/v1612866090/Screen_Shot_2021-02-09_at_17.21.14_xtm5nc.png 'DB Design')
- Already make dummy user for seeder with email `demo1@gmail.com` - `demo5@gmail.com` and password with `password1234`
- And some seeder for products
