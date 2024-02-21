const express = require('express');
const router = express.Router();
const roomTypeController = require('../Controllers/roomTypeController')

router.get('/all',roomTypeController.getAllRoomTypes);
router.get('/filter/:id',roomTypeController.filterRoomType);
router.post('/new',roomTypeController.createRoomType);
router.put('/update/:id',roomTypeController.updateRoomType);
router.delete('/delete/:id',roomTypeController.DeleteRoomType);

module.exports = router;