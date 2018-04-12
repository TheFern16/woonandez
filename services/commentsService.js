const commentsRepo = require('../repo/commentsRepository.js');

module.exports = {
  findAll: function(req, res) {
    commentsRepo.findAll(req, res);
  }
}