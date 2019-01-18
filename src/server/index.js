const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const board = require('./router/board');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(`${__dirname}/../../public`));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// router
app.use('/board', board);

// next함수
app.use((err, req, res, next) => {
  console.log(`error occurrence : ${err}`);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).json({
    errorMassage: err,
    success: false,
  });
});

app.listen(8080, () => {
  console.log('server on port 8080');
});
