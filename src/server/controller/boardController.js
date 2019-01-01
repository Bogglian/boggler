const board = require('../db/board')()
const file = require('../db/file')()
const uniqueFilename = require('unique-filename')

module.exports= function() {
    return{
       modify : function(req,res,next){
            board.modify(req.params.boardId,req.body,function(err,data){
                if(err){
                    next(err)
                }
                res.status(200).json({success : true})
            })
        },
        delete : function(req,res,next){
            board.delete(req.params.boardId,function(err,data){
                if(err){
                    next(err)
                }
                res.status(200).json({success: true})
            })
        },
        showAll : function(req,res,next){
            board.showAll(function(err,data){
                if(err){
                    next(err)
                }
                res.status(201).json({boards:data})
            })
        },
        showOne : function(req,res,next){
            board.showOne(req.params.boardId,function(err,data){
                if(err){
                    next(err)
                }
                res.status(201).json({board:data[0]})
            })
        },
        write : function(req,res,next) {
            if(!req.files){
                console.log('just write board no file')
                board.write(req.body,null,function(err,writeResult){
                    if(err){
                        next(err)
                    }
                     board.showOne(writeResult.insertId,function(err,showResult){
                        if(err){
                            next(err)
                        }
                        res.status(201).json(showResult[0])
                    })
                })
             }else{
                console.log(`write board with file filename: ${req.files.audiofile.name}`)
                let getFile = req.files.audiofile
                //file뭘로 받을지 작성
                let fakeName = uniqueFilename('')
                console.log(fakeName);
                getFile.mv(`${__dirname}/../upload/${fakeName}`,function(err){
                    if(err){
                        next(err)
                    }
                    board.write(req.body,function(err,writeResult){
                        if(err){
                            next(err)
                        }
                        file.upload(getFile.name,fakeName,writeResult.insertId,function(err,fileResult){
                            if(err){
                                next(err)
                            }
                            board.showOne(writeResult.insertId,function(error,data){
                                if(error){
                                    next(error)
                                }
                                res.status(201).json({board:data[0]})
                            })
                        })
                    })
                })
            }
        }
    }
}
