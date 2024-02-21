const express  = require('express');
const router = express.Router();
const userController =  require('../Controllers/UserController')
router.get('/all',userController.getAllUser)
router.get('/find/:id',userController.findByUserId) 
router.get('/find/:id',userController.getUser)
router.post('/new',userController.registerUser)
router.post('/login',userController.login)
router.put('/role/:id',userController.updateRoleUser)
router.delete('/delete/:id',userController.deleteUser)

module.exports = router