const { password } = require('./tokens');
module.exports = {
  "development": {
    "username": "mutabazi",
    "password": password,
    "database": "ghostprotocoldb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": password,
    "database": "ghostprotocoldb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": password,
    "database": "ghostprotocoldb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
