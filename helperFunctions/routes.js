const express = require('express');
const router = express.Router();
const routes = router.route('/');

routes.get('/api/apps', (req, res) => {
  res.send(appData.apps);
});

routes.get('/api/facts', (req, res) => {
  res.send(factData.facts);
});

routes.get('/api/fun', (req, res) => {
  res.send(funData.fun);
});

routes.get('/api/skills', (req, res) => {
  res.send(skillsData.skills);
});

routes.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

module.exports = routes;
