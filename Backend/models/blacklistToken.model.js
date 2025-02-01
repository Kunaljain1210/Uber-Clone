const mongoose = require('mongoose')    

const blacklistTokenSchema = new mongoose.Schema({
    token : {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        Default: Date.now,
        expires: 86400    //24 Hours in Second
    }
})

module.exports = mongoose.model('BlackListToken', blacklistTokenSchema)