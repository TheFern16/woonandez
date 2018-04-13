const commentsService = require('../services/commentsService.js');

module.exports = {
  findAll: function(req, res) {
    commentsService.findAll(req, res)
      .then(result => res.json(result));
  },
  persist: function(req, res) {
    commentsService.persist(req, res)
      .then(response => res.json(response.rowCount))
      .catch(error => res.json(error));
  },
  update: function(req, res) {
    commentsService.findOne(req, res)
      .then(response => {
        const foundUserId = JSON.parse(JSON.stringify(response)).comment_id;
        req.body.comment_id = foundUserId;
        if (req.body.comment_id) {
          commentsService.update(req, res)
            .then(r => res.json(r.rowCount));
        }
      });
  }
}