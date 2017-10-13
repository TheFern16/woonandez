const express = require('express');
const router = express.Router();
const routes = router.route('/');

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