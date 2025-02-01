const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const {validationResult} = require("express-validator")

module.exports.registerCaptain = async(req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()})
    }

    const {fullName, email, password, vechile} = req.body

    const isCaptainAlreadyExist = await captainModel.findOne({email})

    if(isCaptainAlreadyExist) {
        return res.status(400).json({message: 'Captain Already Exist'})
    }
    const hashedPassword = await captainModel.hashPassword(password)
    
    const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword,
        color: vechile.color,
        plate: vechile.plate,
        capacity: vechile.capacity,
        vechileType: vechile.vechileType
    })

    const token = captain.generateAuthToken()
    res.status(201).json({token, captain})
}

module.exports.loginCaptain = async(req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()})
    }
    const {email, password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password')
    if(!captain) {
        return res.status(401).json({message : "Invalid email or password"})
    }

    const isMatch = await captain.comparePassword(password)
    if(!isMatch) {
        return res.status(401).json({message : 'Invalid email or password'})
    }

    const token = captain.generateAuthToken()
    res.cookie('Token', token)
    res.status(200).json({token, captain})
}

module.exports.getCaptainProfile = async(req, res, next) => {
    res.status(200).json({captain : req.captain})
}

module.exports.logoutCaptain = async(req, res, next) => {
    res.clearCookie('token')

    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    await blacklistTokenModel.create({token})  
    res.clearCookie('token')

    res.status(200).json({message : 'Successfully Logout'})
}
