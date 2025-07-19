const { timeStamp } = require('console')

const ProfileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
    bio: {type: String},
    age: {type: Number},
    location: {type: String},
}, {timeStamps: true})

module.exports = mongoose.model('Profile', ProfileSchema)