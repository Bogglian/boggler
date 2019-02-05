const express = require('express')
const router = express.Router();
const deepspeech = require('../controller/deepspeechController')()

router.post('', deepspeech.file)

module.exports = router;
