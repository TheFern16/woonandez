const commentsService = require('../services/commentsService.js');
console.log(commentsService)

module.exports = {
  findAll: function(req, res) {
    commentsService.findAll(req, res);
  }
}