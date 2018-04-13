const commentsRepo = require('../repo/commentsRepository.js');

module.exports = {
  findAll: function() {
    return new Promise((res, rej) => {
      commentsRepo.findAll()
        .then(response => res(response))
        .catch(error => console.error(error));
    })
  },
  persist: function(req, res) {
    console.log('ran');
  }
}