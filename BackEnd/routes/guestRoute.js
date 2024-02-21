const express = require('express');
const router  = express.Router();

// Controllers
const guestController = require('../Controllers/guestController')

// get Route
router.get('/all',guestController.getAllGuests)
router.get('/filter/:id',guestController.filterGuests)
router.post('/new',guestController.createGuests)
router.delete('/delete/:id',guestController.DeleteGuests);
router.put('/update/:id',guestController.updateGuests)

module.exports = router;