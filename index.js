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
      let addOComma = text.replace(/( and)/gi, ', and');
      let testDouble = addOComma.replace(/(,, and)/gi, ', and');
      resolve(testDouble);
    } else {
      reject(Error('woopsie'));
    }
  });
}

// routing
app.post('/api/oxfordComma', (req, res) => {
  addOxfordComma(req.body.text)
    .then((response) => {
      console.log(JSON.parse(response), typeof response);
      res.json(response);
    });
});

// listening to port 1337
app.listen(port, () => {
  console.log(`I am listening to port #${port}`)
});