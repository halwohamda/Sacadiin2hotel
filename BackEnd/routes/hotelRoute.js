const express = require('express')
const router = express.Router();
const hotelController = require('../Controllers/hotelController')
router.get('/all',hotelController.getAll)
router.post('/new',hotelController.postHotel)

module.exports = router;