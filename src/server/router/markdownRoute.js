const express = require('express')
const router = express.Router();

router.post('/pdf', function(req, res) {
  console.log(`[Convert markdown to pdf] Text : ${req.body.markdownText});
  markdownpdf().from.string(req.body.markdownText).to.buffer("", function (err,buffer) {
  res.send(buffer);
})

module.exports = router;
