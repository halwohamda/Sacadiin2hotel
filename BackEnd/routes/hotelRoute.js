const express = require('express');
const router  = express.Router();

// Controllers
const hotelController = require('../Controllers/hotelConroller')

// get Route
router.get('/all',hotelController.getAll)
router.get('/filter/:id',hotelController.filteringHotels)
router.post('/new',hotelController.createHotel)
router.delete('/delete/:id',hotelController.deletingHotel);
router.put('/update/:id',hotelController.updatingHotel)

module.exports = router;