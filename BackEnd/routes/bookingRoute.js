const express = require('express');
const router  = express.Router();

// Controllers
const bookingController = require('../Controllers/hotelConroller')

// get Route
router.get('/all',bookingController.getAll)
router.get('/filter/:id',bookingController.filteringHotels)
router.post('/new',bookingController.createHotel)
router.delete('/delete/:id',bookingController.deletingHotel);
router.put('/update/:id',bookingController.updatingHotel)

module.exports = router;