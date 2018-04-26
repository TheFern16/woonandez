const { Client } = require('pg');
// const conString = 'postgres://MatthewAFernandez:password@localhost:5432/woonandez';

const client = new Client({
  connectionString: conString || process.event.DATABASE_URL
});

client.connect();

module.exports = client;