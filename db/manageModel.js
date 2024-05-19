const mongoose = require("mongoose")

const manageSchema = mongoose.Schema({
    name: String,
    address: String,
    contact: String,
    email: String
})

module.exports = mongoose.model('contact', manageSchema)