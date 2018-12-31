const board = require('../db/board')
const file = require('../db/file')
const uniqueFilename = require('unique-filename')

module.exports= function(){
    return{
        write : function(req,res,next) {
            if(!req.files){
            console.log('just write board no file')
            board.write(req.body,null,function(writeErr,writeResult){
                if(writeErr){
                    next(writeErr)
                }else{
                    board.show(writeResult.insertId,function(showErr,showResult){
                        if(showErr){
                            next(showErr)
                        }else{
                            //여기 showResult[0]으로 해야하나요?
                            res.status(201).json(showResult[0])
                        }
                    })
                }
             })
             }else{
                console.log(`write board with file filename: ${req.files.filename}`)
                let getFile = req.files.audiofile
                let fakeName = uniqueFilename(`${req.files.filename}`)
                getFile.mv(`${__dirname}/../upload/${getFile.name}`,function(uploadErr){
                    if(uploadErr){
                        next(uploadErr)
                    }else{
                        file.upload(getFile.name,fakeName,function(fileDbErr,fileResult){
                            if(fileDbErr){
                                next(fileDbErr)
                            }else{
                                board.write(req.body,fileResult.insertId,function(boardWriteErr,writeResult){
                                    board.show(writeResult.insertId,function(showErr,data){
                                        //data[0]을 해야하나요?
                                        res.status(201).json({board:data[0], file:fileResult})
                                    })
                                })
                            }
                        })
                    }
                })
                
            }
        }
    }
}