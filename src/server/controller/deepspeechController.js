const ds=require('node-deepspeech')
const FS=require('fs')
module.exports= function() {
    return{
        file : function(req,res,next) {
            if(!req.files){
                console.log('no file')
                next()
            }
            console.log(`write board with file filename: ${req.files.audiofile.name}`)
            let getFile = req.files.audiofile
            getFile.mv(`${__dirname}/../upload/${getFile.name}`, function(saveErr) {
                if (saveErr) {
                  next(saveErr)
                }
                let result = ds.dsFile(`${__dirname}/../upload/${getFile.name}`)
                console.log(result)
            })
            res.status(201).json({ds:result})
        }
    }
}
