const express = require('express');
const router  = express.Router();

// Controllers
const roomsController = require('../Controllers/roomController')

// get Route
router.get('/all',roomsController.getAllRoom)
// router.get('/filter/:id',roomController.filteredRoom)
router.post('/new',roomsController.createRoom)
// router.delete('/delete/:id',roomsController.deleteRoom);
// router.put('/update/:id',roomsController.updateRoom)

module.exports = router;