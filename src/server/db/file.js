const pool = require('./db_connect');

module.exports = function(){
  return {
    // download : function(fileId, callback) {
    //   pool.getConnection(function(err, con) {
    //     let sql = 'SELECT * FROM audiofile WHERE id = ?';
    //     con.query(sql, fileId, function(error, rows, fields) {
    //       if (error) {
    //         return callback(error);
    //       }
    //       con.release();
    //       callback(null, rows);
    //     });
    //   });
    // },
    upload : function(realfilename, fakefilename, boardId, callback) {
      pool.getConnection(function(err, con) {
        let sql = 'INSERT INTO audiofile (realfilename,fakefilename, board_id) VALUES (?,?,?)';
        con.query(sql, [realfilename,fakefilename, boardId], function(error, rows, fields) {
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
