const pool = require('./db_connect')
module.exports=function () {
    return{
        modify: function(boardId,board,callback){
            pool.getConnection(function(err,con){
                if(err){
                    callback(err)
                }
                let modifyBoardSql="UPDATE board SET title = ?, content = ? where id = ?"
                con.query(modifyBoardSql,[board.title,board.content,boardId],function(err,rows,fields){
                    con.release()
                    if(err){
                        callback(err)
                    }
                    callback(null,rows)
                })
            })
        },
        delete: function(boardId,callback){
            pool.getConnection(function(err,con){
                if(err){
                    return callback(err)
                }
                let deleteBoardSql=
                "DELETE FROM audiofile where board_id = ?"
                let deleteAudiofileSql=
                "DELETE FROM board where id = ?"
                con.query(deleteBoardSql,[boardId],function(err,rows,fields){
                    if(err){
                        con.release()
                        return callback(err)
                    }
                    con.query(deleteAudiofileSql,[boardId],function(err,rows,fields){
                        con.release()
                        if(err){
                            return callback(err)
                        }
                        callback(null,rows)
                    })
                })
            })
        },
        showAll: function(callback){
            pool.getConnection(function(err,con){
                if(err){
                    return callback(err)
                }
                let showAllSql =
                    "SELECT b.id, b.title, b.content, b.created_time FROM board b"
                con.query(showAllSql,function(error,rows,fields){
                    con.release()
                    if(error){
                        return callback(error)
                    }
                    callback(null,rows)
                })
            })
        },
        write: function(board, callback){
            pool.getConnection(function(err,con){
                if(err){
                    console.log('db connect error')
                    return callback(err)
                }
                let writeSql =
                    "INSERT INTO board (title, content) VALUES (?, ?)"
                con.query(
                writeSql,
                    [board.title,board.content],
                    function(error,rows,fields){
                        con.release()
                        if(error){
                            return callback(error)
                        }
                        callback(null,rows)
                    }
                )
            })
        },
        showOne: function(boardId,callback){
            pool.getConnection(function(err,con){
                if(err){
                    console.log('db connect error')
                    return callback(err)
                }
                let showSql =
                "SELECT b.id, b.title, b.content, b.created_time, f.realfilename, f.fakefilename FROM board b left join audiofile f on b.id= f.board_id where b.id = ?"
                con.query(
                    showSql,[boardId],function(error,rows,fields){
                      console.log(JSON.stringify(rows));
                        con.release()
                        if(error){
                            return callback(error)
                        }
                        callback(null,rows)
                    }
                )
            })
        }
    }
}
