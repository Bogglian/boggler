const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const deepspeech = require('./router/deepspeechRoute');
const markdown = require('./router/markdownRoute');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(fileUpload());
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
app.use('/deepspeech', deepspeech);
app.use('/markdown/conversion', markdown);

// next function
app.use((err, req, res, next) => {
  console.log(`error occurrence : ${err}`);

  if (!err.statusCode) {
    err.statusCode = 500;
  }
  if (!next) {
    console.log("no inputed 'next' function.");
  }

  res.status(err.statusCode).json({
    errorMassage: err,
    success: false,
  });
});

app.listen(8080, () => {
  console.log('server on port 8080');
});
