const express = require('express');

const router = express.Router();

const markdownpdf = require('markdown-pdf');

router.post('/pdf', (req, res) => {
  markdownpdf()
    .from.string(req.body.markdownText)
    .to.buffer('', (err, buffer) => {
      res.send(buffer);
    });
});

router.post('/md', (req, res) => {
  res.type('md');
  res.send(req.body.markdownText);
});

module.exports = router;
