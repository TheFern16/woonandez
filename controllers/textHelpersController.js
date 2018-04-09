const textHelpers = require('../services/textHelpersService');

module.exports = {
  altCase: function(req, res) {
    textHelpers.altCase(req.body.text);
  },
  camelCase: function(req, res) {
    textHelpers.camelCase(req.body.text);
  },
  createString: function(req, res) {
    textHelpers.createString(req.body.text);
  },
  lowerCase: function(req, res) {
    textHelpers.upperCase(req.body.text);
  },
  oxfordComma: function(req, res) {
    textHelpers.addOxfordComma(req.body.text);
  },
  upperCase: function(req, res) {
    textHelpers.lowerCase(req.body.text);
  }
}



// fun with text
// router.post('/oxfordComma', (req, res) => {
//   TextHelpers.addOxfordComma(req.body.text)
//     .then((response) => {
//       res.json(response);
//     });
// });

// router.post('/upperCase', (req, res) => {
//   TextHelpers.upperCase(req.body.text)
//     .then((response) => {
//       res.json(response);
//     });
// });

// router.post('/lowerCase', (req, res) => {
//   TextHelpers.lowerCase(req.body.text)
//     .then((response) => {
//       res.json(response);
//     });
// });

// router.post('/camelCase', (req, res) => {
//   TextHelpers.camelCase(req.body.text)
//     .then((response) => {
//       res.json(response);
//     });
// });

// router.post('/altCase', (req, res) => {
//   TextHelpers.altCase(req.body.text)
//     .then((response) => {
//       res.json(response);
//     });
// });