const { Client } = require('pg');

const client = new Client({});

if (process.env.DATABASE_URL === undefined) {
  client.connectionString ='postgres://MatthewAFernandez:password@localhost:5432/woonandez';
} else {
  client.connectionString =  process.env.DATABASE_URL;
  client.ssl = true;
};

client.connect();

module.exports = client;