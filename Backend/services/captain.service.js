const captainModel = require('../models/captain.model')

module.exports.createCaptain = async({
    firstName, lastName, email, password, color, plate, capacity, vechileType
}) => {
    if(!firstName  || !email || !password || !color || !plate || !capacity || !vechileType) {
        throw new Error('All field are Required')
    }

    const captain = captainModel.create({
        fullName : {
            firstName,
            lastName,
        },
        email,
        password,
        vechile : {
            color,
            plate,
            capacity,
            vechileType
        }
    })

    return captain
}