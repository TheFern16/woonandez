const commentsRepo = require('../repo/commentsRepository.js');

module.exports = {
  findAll: function() {
    return new Promise((res, rej) => {
      commentsRepo.findAll()
        .then(response => res(response))
        .catch(error => console.error(error));
    });
  },
  findOne: function(req, res) {
    return new Promise((resolve, reject) => {
      commentsRepo.findOne(req.body.comment_id)
        .then(response => resolve(response))
        .catch(error => console.error(error))
    })
  },
  persist: function(req, res) {
    return new Promise((resolve, reject) => {
      commentsRepo.persist(req.body)
        .then(response => resolve(response))
        .catch(error => console.error(error));
    });
  },
  update: function(req, res) {
    console.log('ran');
  }
}