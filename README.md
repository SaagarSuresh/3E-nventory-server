# 3E-nventory - API
# 3E-nventory Web Application

3E-nventory is an easy, efficient and elegant inventory tracking system.

This application is created for a chocolate shop running 3 stores.

Click [here](https://github.com/SaagarSuresh/3E-nventory-client) to take a look at the front-end.


## Tech Stack

Client: React, SASS, HTML

Server: Node, Express, MySQL

## API Reference

#### Get all inventory

```http
  GET /store
```
#### Get inventory of specific store

```http
  GET /store/:storeId
```
#### Get truffle names from truffle table

```http
  GET /store/trufflelist/all
```
#### Add new inventory item

```http
  POST /store/item
```
#### Get a specific inventory

```http
  GET /store/item/:itemId
```
#### Edit a specific inventory

```http
  PATCH /store/item/:itemId
```
#### Delete an inventory

```http
  DELETE /store/item/:itemId
```

## Deployment
#### To Deploy the Back End:

```http
  git clone https://github.com/SaagarSuresh/3E-nventory-server.git
```
(or download it from Code > Download Zip)

You'll need to create a .env file with variables for PORT and BACKEND_URL (There's also a .env_sample, you can just edit the filename to .env)

You'll need to install node modules with:

```http
npm i
```
Run migrations, to create tables, with:

```http
npm run migrate
```
Run seeding, to populate tables with data, with:

```http
npm run seed
```
Run the server with:

```http
npm run start
```
or if you have nodemon:

```http
npm run dev
```
#### To Deploy the Back End:

```http
  git clone https://github.com/SaagarSuresh/3E-nventory-client.git
```
(or download it from Code > Download Zip)

You'll need to install node modules with:

```http
npm i
```
To run the application, enter:

```http
npm start
```
## Features

- Render inventory specific to each store as you navigate among the stores
- Create new inventory
- Edit existing inventory
- Delete inventory

# Next Steps

- Notification page to alert user of shortage in inventory stock
- User authentication and authorization