const pool = require('./db_connect');

module.exports = function() {
  return {
    modify(boardId, board, callback) {
      pool.getConnection((err, con) => {
        if (err) {
          callback(err);
        }
        const modifyBoardSql =
          'UPDATE board SET title = ?, content = ? where id = ?';
        con.query(
          modifyBoardSql,
          [board.title, board.content, boardId],
          (err, rows, fields) => {
            con.release();
            if (err) {
              callback(err);
            }
            callback(null, rows);
          },
        );
      });
    },
    delete(boardId, callback) {
      pool.getConnection((err, con) => {
        if (err) {
          return callback(err);
        }
        const deleteBoardSql = 'DELETE FROM audiofile where board_id = ?';
        const deleteAudiofileSql = 'DELETE FROM board where id = ?';
        const selectBoardSql =
          'SELECT f.fakeFileName FROM board b left join audiofile f on b.id=f.board_id where b.id=?';
        con.query(selectBoardSql, [boardId], (err, selectBoardRows, fields) => {
          if (err) {
            con.release();
            return callback(err);
          }

          con.query(
            deleteBoardSql,
            [boardId],
            (err, deleteBoardRows, fields) => {
              if (err) {
                con.release();
                return callback(err);
              }
              con.query(
                deleteAudiofileSql,
                [boardId],
                (err, deleteAudiofileRows, fields) => {
                  con.release();
                  if (err) {
                    return callback(err);
                  }
                  callback(null, selectBoardRows);
                },
              );
            },
          );
        });
      });
    },
    showAll(callback) {
      pool.getConnection((err, con) => {
        if (err) {
          return callback(err);
        }
        const showAllSql =
          'SELECT b.id, b.title, b.content, b.created_time FROM board b';
        con.query(showAllSql, (error, rows, fields) => {
          con.release();
          if (error) {
            return callback(error);
          }
          callback(null, rows);
        });
      });
    },
    write(board, callback) {
      pool.getConnection((err, con) => {
        if (err) {
          console.log('db connect error');
          return callback(err);
        }
        const writeSql = 'INSERT INTO board (title, content) VALUES (?, ?)';
        con.query(
          writeSql,
          [board.title, board.content],
          (error, rows, fields) => {
            con.release();
            if (error) {
              return callback(error);
            }
            callback(null, rows);
          },
        );
      });
    },
    showOne(boardId, callback) {
      pool.getConnection((err, con) => {
        if (err) {
          console.log('db connect error');
          return callback(err);
        }
        const showSql =
          'SELECT b.id, b.title, b.content, b.created_time, f.realfilename, f.fakefilename FROM board b left join audiofile f on b.id= f.board_id where b.id = ?';
        con.query(showSql, [boardId], (error, rows, fields) => {
          console.log(JSON.stringify(rows));
          con.release();
          if (error) {
            return callback(error);
          }
          callback(null, rows);
        });
      });
    },
  };
};
