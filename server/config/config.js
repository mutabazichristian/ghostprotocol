const { password } = require("./tokens");

module.exports = {
  development: {
    username: 'mutabazi',
    password: password,
    database: 'ghostprotocoldb',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'mutabazi',
    password: password,
    database: 'ghostprotocoldb',
    host: 'localhost',
    dialect: 'mysql'
  },
  production: {
    username: 'mutabazi',
    password: password,
    database: 'ghostprotocoldb',
    host: 'localhost',
    dialect: 'mysql'
  }
};
