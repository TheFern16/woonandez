const commentsService = require('../services/commentsService.js');

module.exports = {
  delete: function(req, res) {
    commentsService.findOne(req, res)
      .then(response => {
        const foundUserId = JSON.parse(JSON.stringify(response)).comment_id;
        req.body.comment_id = foundUserId;

        if (foundUserId) {
           commentsService.delete(req, res)
            .then(r => res.json(r.rowCount));
        }
      });
  },
  findAll: function(req, res) {
    commentsService.findAll(req, res)
      .then(result => res.json(result))
      .catch(error => res.json(error));
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

        if (foundUserId) {
          commentsService.update(req, res)
            .then(r => res.json(r.rowCount));
        }
      });
  }
}