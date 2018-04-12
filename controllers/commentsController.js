const commentsService = require('../services/commentsService.js');

module.exports = {
  findAll: function(req, res) {
    commentsService.findAll(req, res)
      .then(result => console.log(result));
  }
}