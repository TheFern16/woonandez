const woonandez = require('../db/connect.js');

module.exports = {
  findAll: function() {
    return new Promise((res, rej) => {
      woonandez.query({
        name: 'find all comments',
        text: 'SELECT * FROM COMMENTS'
      })
      .then(result => res(result.rows))
      .catch(e => console.error(e))
    });
  },
  persist: function(body) {
    return new Promise((res, rej) => {
      woonandez.query({
        name: 'persist user',
        text: 'INSERT INTO COMMENTS(day, comment) VALUES ($1, $2)',
        values: [req.body.day, req.body.comment]
      })
      .then((result => res(result))
      .catch(e => console.error(e))
    });
  }
}