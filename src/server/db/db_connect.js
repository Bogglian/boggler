const mysql = require("mysql")

module.exports = (function() {
  var config = require("./.db_config") // ./는 현재 디렉토리를 나타냅니다
  var pool = mysql.createPool({
    database: config.database,
    host: config.host,
    password: config.password,
    user: config.user
  })

  return {
    end: function(callback) {
      pool.end(callback)
    },
    getConnection: function(callback) {
      // connection pool을 생성하여 리턴합니다
      pool.getConnection(callback)
    }
  }
})()
