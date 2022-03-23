const mongoose = require('mongoose')
const usersSchame = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
module.exports = mongoose.model('users', usersSchame)