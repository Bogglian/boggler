const express = require('express')
const router = express.Router();
const board = require('../controller/boardController')


router.post('', board.write)
router.get('', board.showAll)
router.get('/:boardId',board.showOne)
router.delete('/:boardId', board.delete)
// router.put('/:boardId',board.update)

module.exports = router;
