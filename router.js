const appData = require('./data/apps');
const factData = require('./data/facts');
const funData = require('./data/facts');
const skillsData = require('./data/skills');
const TextHelpers = require('./helperFunctions/textHelperFunctions');
const router = require('express').Router();

// fun with text
router.post('/oxfordComma', (req, res) => {
  TextHelpers.addOxfordComma(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

router.post('/upperCase', (req, res) => {
  TextHelpers.upperCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

router.post('/lowerCase', (req, res) => {
  TextHelpers.lowerCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

router.post('/camelCase', (req, res) => {
  TextHelpers.camelCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});

router.post('/altCase', (req, res) => {
  TextHelpers.altCase(req.body.text)
    .then((response) => {
      res.json(response);
    });
});


// data routes
router.get('/apps', (req, res) => {
  res.send(appData.apps);
});

router.get('/facts', (req, res) => {
  res.send(factData.facts);
});

router.get('/fun', (req, res) => {
  res.send(funData.fun);
});

router.get('/skills', (req, res) => {
  res.send(skillsData.skills);
});

module.exports = router;