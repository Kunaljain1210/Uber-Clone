const express = require('express')
const router = express.Router()
const {body} = require("express-validator")
const userController = require('../controllers/user.controllers')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    //Validation
    //cheaking weather email is correct or not, if not then passing an message same with firstname
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First Message must be 3 Character long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], 
    userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
],
    userController.loginUser
) 

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout',authMiddleware.authUser, userController.logoutUser)

module.exports = router


