const express = require('express')
const router = express.Router();

router.post('/pdf', function(req, res) {
  markdownpdf().from.string(req.body.markdownText).to.buffer("", function (err,buffer) {
    res.send(buffer);
  })
});

router.post('/md', function (req, res) {
  res.type('md')
  res.send(req.body.markdownText);
});

module.exports = router;
