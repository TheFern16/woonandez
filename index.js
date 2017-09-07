// server middleware
const express = require('express');
const bodyParser = require('body-parser');

// server
const app = express();
const port = process.env.PORT || 1337;

// serve client files
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));


// add oxford comma
const addOxfordComma = (text) => {
  return new Promise((resolve, reject) => {
    if (text.replace(/( and)/gi, ", and")) {
      let testDouble = text.replace(/(,+)/gi, '');
      let addOComma = testDouble.replace(/( and)/gi, ', and');
      resolve(addOComma);
    } else {
      reject(Error('woopsie'));
    }
  });
}

// routing
app.post('/api/oxfordComma', (req, res) => {
  addOxfordComma(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// listening to port 1337
app.listen(port, () => {
  console.log(`I am listening to port #${port}`)
});