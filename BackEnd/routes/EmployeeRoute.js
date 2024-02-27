const express = require('express');
const router = require ('router');
const EmployeController = require('../Controllers/EmployeeController')
router.get('/all',EmployeController.getAll);
router.Post('/new',EmployeController.PostEmployee);

module.exports =router;
