const woonandez = require('../db/connect.js');

module.exports = {
  findOne: function(id) {
    woonandez: query({
      name: 'find one',
      text: 'SELECT * FROM COMMENTS WHERE comment_id = $1',
      values: [id]
    })
    .then(result => result)
    .catch(e => console.error(e));
  },
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
        text: 'INSERT INTO COMMENTS(comment) VALUES ($1)',
        values: [body.comment]
      })
      .then(result => res(result))
      .catch(e => console.error(e))
    });
  },
  update: function(body) {
    return new Promise((res, rej) => {
      woonandez.query({
        name: 'udate user',
        text: 'INSERT INTO COMMENTS(comment) VALUES ($1) WHERE comment_id = $2',
        values: [body.comment, body.comment_id]
      })
      .then(result => res(result))
      .catch(e => console.error(e))
    });
  }
}