const textHelpers = require('../services/textHelpersService');

module.exports = {
  addOxfordComma: function(req, res) {
    textHelpers.addOxfordComma(req, res);
  },
  altCase: function(req, res) {
    textHelpers.altCase(req, res);
  },
  camelCase: function(req, res) {
    textHelpers.camelCase(req, res);
  },
  createString: function(req, res) {
    textHelpers.createString(req, res);
  },
  lowerCase: function(req, res) {
    textHelpers.upperCase(req, res);
  },
  upperCase: function(req, res) {
    textHelpers.lowerCase(req, res);
  }
}
