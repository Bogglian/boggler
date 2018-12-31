const express = require('express')
const router = express.Router();
const board = require('../controller/boardController')

router.post('', board.write)
router.get('', board.showBoardsAll)
router.delete('/:boardId', board.remove)
router.put('/:boardId',board.update)

module.exports = router;
