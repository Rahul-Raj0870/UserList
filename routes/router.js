const express = require('express')
const userController = require('../controllers/userController')
const detailsController = require('../controllers/detailsController')
const router = new express.Router()

// Register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// Get users
router.post('/login/userdetails',userController.userDetails)

// Add userdetails
router.post('/details',detailsController.addUserController)

module.exports = router