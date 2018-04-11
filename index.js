// server middleware
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');

// server
const app = express();
const port = process.env.PORT || 1337;

// serve client files
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/dist'));

// routing
app.use('/api', router);

// serve bundle
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// listening to port 1337
app.listen(port, () => {
  console.log(`I am listening to port #${port}`);
});