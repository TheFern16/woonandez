// server middleware
const express = require('express');
const bodyParser = require('body-parser');

// data
const appData = require('./data/apps');
const factData = require('./data/facts');
const funData = require('./data/facts');
const skillsData = require('./data/skills');

// helper
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

app.post('/api/upperCase', (req, res) => {
  TextHelpers.upperCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

app.post('/api/lowerCase', (req, res) => {
  TextHelpers.lowerCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

app.post('/api/camelCase', (req, res) => {
  TextHelpers.camelCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

app.post('/api/altCase', (req, res) => {
  TextHelpers.altCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});


// data routes
app.get('/api/apps', (req, res) => {
  res.send(appData.apps);
});

app.get('/api/facts', (req, res) => {
  res.send(factData.facts);
});

app.get('/api/fun', (req, res) => {
  res.send(funData.fun);
});

app.get('/api/skills', (req, res) => {
  res.send(skillsData.skills);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// listening to port 1337
app.listen(port, () => {
  console.log(`I am listening to port #${port}`);
});