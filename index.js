const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/dist'));


app.listen(port, () => {
  console.log(`I am listening to port #${port}`)
});