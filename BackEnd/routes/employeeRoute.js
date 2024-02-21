const express = require('express');
const router = express.Router();

const emplooyeeController = require('../Controllers/emplooyeeController')

router.get('/all',emplooyeeController.getAllEmplooyee);
router.post('/new',emplooyeeController.createNewEmplooyee);
router.put('/update/:id',emplooyeeController.updateEmplooyee);
router.get('/filter/:id',emplooyeeController.filteringEmplooyee);
router.delete('/delete/:id',emplooyeeController.deleteEmplooyee)
module.exports = router;