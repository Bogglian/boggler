const express = require("express")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const board = require('./router/board')
const app = express()





app.use(bodyParser.json())
app.use(fileUpload())

app.use()




//next함수
app.use(function(err, req, res, next) {
    console.log(`error occurrence : ${err}`)
    if (!err.statusCode) {
      err.statusCode = 500
    }
    res.status(err.statusCode).json({
      errorMassage: err,
      success: false
    })
  })
  

app.listen(8080,function(){
    console.log('server on port 8080')
})