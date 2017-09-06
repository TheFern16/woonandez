// server middleware
const express = require('express');
const bodyParser = require('body-parser');

// server
const app = express();
const port = process.env.PORT || 1337;

// serve client files
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));


app.post('/api/oxfordComma', function(req, res) {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`I am listening to port #${port}`)
});