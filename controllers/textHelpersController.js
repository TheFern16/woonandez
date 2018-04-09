const textHelpers = require('../services/textHelpersService');

module.exports = {
  altCase: function(req, res) {
    textHelpers.altCase(req.body.text)
      .then((response) => {
        res.json(response);
      });
  },
  camelCase: function(req, res) {
    textHelpers.camelCase(req.body.text)
      .then((response) => {
        res.json(response);
      });
  },
  createString: function(req, res) {
    textHelpers.createString(req.body.text)
      .then((response) => {
        res.json(response);
      });
  },
  lowerCase: function(req, res) {
    textHelpers.lowerCase(req.body.text)
      .then((response) => {
        res.json(response);
      });
  },
  oxfordComma: function(req, res) {
    textHelpers.oxfordComma(req.body.text)
      .then((response) => {
        res.json(response);
      });
  },
  upperCase: function(req, res) {
    textHelpers.upperCase(req.body.text)
      .then((response) => {
        res.json(response);
      });
  }
};