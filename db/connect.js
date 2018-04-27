const { Client } = require('pg');
const conString = 'postgres://MatthewAFernandez:password@localhost:5432/woonandez';
const client = new Client({
  connectionString: process.env.DATABASE_URL === undefined ? conString : process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL === undefined ? false : true
});

client.connect();

module.exports = client;