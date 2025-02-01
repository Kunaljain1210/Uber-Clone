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


