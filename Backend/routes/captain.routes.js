const express = require('express')
const router = express.Router()
const {body} = require("express-validator")
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First Message must be 3 Character long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vechile.color').isLength({min: 3}).withMessage('Vechile color must be at least 3 characters long'),
    body('vechile.plate').isLength({min: 3}).withMessage('Vechile plate must be at least 3 characters long'),
    // body('vechile.capacity').isLength({min: 3}).withMessage('Vechile capacity must be more then one'),
    body('vechile.capacity').isInt({min: 1}).withMessage('Vehicle capacity must be a positive integer'),
    body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vechile capacity must be at least 3 characters long'),
], captainController.registerCaptain)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], captainController.loginCaptain)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;