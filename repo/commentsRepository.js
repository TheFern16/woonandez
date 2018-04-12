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
  }
}