// server middleware
const express = require('express');
const bodyParser = require('body-parser');

// helper functions
const TextHelpers = require('./helperFunctions/textHelperFunctions');

// server
const app = express();
const port = process.env.PORT || 1337;

// serve client files
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

// routing
app.post('/api/oxfordComma', (req, res) => {
  TextHelpers.addOxfordComma(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

app.post('/api/encrypt', (req, res) => {
  TextHelpers.encryptText(req.body.text)
    .then((response) => {
      console.log(response, typeof response);
      res.send(response);
    });
})

app.post('/api/decrypt', (req, res) => {
  TextHelpers.decryptText(req.body.text)
    .then((response) => {
      console.log(response, 'decrypt', typeof response);
      res.send(response);
    });
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// listening to port 1337
app.listen(port, () => {
  console.log(`I am listening to port #${port}`)
});