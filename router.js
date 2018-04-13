const router = require('express').Router();
const appData = require('./data/apps');
const factData = require('./data/facts');
const funData = require('./data/facts');
const skillsData = require('./data/skills');
const textController = require('./controllers/textHelpersController');
const commentsController = require('./controllers/commentsController');

// fwt
router.post('/altCase', textController.altCase);
router.post('camelCase', textController.camelCase);
router.post('/lowerCase', textController.lowerCase);
router.post('/oxfordComma', textController.oxfordComma);
router.post('/upperCase', textController.upperCase);
router.post('/camelCase', textController.camelCase);

// comments routing
router.get('/comments', commentsController.findAll);
router.post('/comments', commentsController.persist);

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