const mysql = require('mysql');

module.exports = (function() {
  const config = require('./.db_config'); // ./는 현재 디렉토리를 나타냅니다
  const pool = mysql.createPool({
    database: config.database,
    host: config.host,
    password: config.password,
    user: config.user,
  });

  return {
    end(callback) {
      pool.end(callback);
    },
    getConnection(callback) {
      // connection pool을 생성하여 리턴합니다
      pool.getConnection(callback);
    },
  };
})();
