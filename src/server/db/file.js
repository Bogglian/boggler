const pool = require('./db_connect');

module.exports = function(){
  return {
    download : function(fileId, callback) {
      pool.getConnection(function(err, con) {
        let sql = 'SELECT * FROM audiofile WHERE id = ?';
        con.query(sql, fileId, function(error, rows, fields) {
          if (error) {
            return callback(error);
          }
          con.release();
          callback(null, rows);
        });
      });
    },
    upload : function(filename, callback) {
      pool.getConnection(function(err, con) {
        let sql = 'INSERT INTO file (filename) VALUES (?)';
        con.query(sql, [filename], function(error, rows, fields) {
          if(error){
            return callback(error);
          }
          con.release();
          callback(null, rows);
        });
      });
    }
  }
}
