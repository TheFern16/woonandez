const woonandez = require('../db/connect.js');

module.exports = {
  findAll: function() {
    return new Promise((resolve, reject) => {
      woonandez.query({
        name: 'find all comments',
        text: 'SELECT * FROM COMMENTS ORDER'
      })
      .then(result => resolve(result.rows))
      .catch(e => console.error(e))
    });
  },
  findOne: function(id) {
    return new Promise((resolve, reject) => {
      woonandez.query({
        name: 'find one',
        text: 'SELECT * FROM COMMENTS WHERE comment_id = $1',
        values: [id]
      })
      .then(result => resolve(result.rows[0]))
      .catch(e => console.error(e));
    });
  },
  persist: function(body) {
    return new Promise((resolve, reject) => {
      woonandez.query({
        name: 'persist user',
        text: 'INSERT INTO COMMENTS(comment) VALUES ($1)',
        values: [body.comment]
      })
      .then(result => resolve(result))
      .catch(e => console.error(e))
    });
  },
  update: function(body) {
    return new Promise((resolve, reject) => {
      woonandez.query({
        name: 'udate user',
        text: 'UPDATE COMMENTS SET comment = $1 WHERE comment_id = $2',
        values: [body.comment, body.comment_id]
      })
      .then(result => resolve(result))
      .catch(e => console.error(e))
    });
  }
}