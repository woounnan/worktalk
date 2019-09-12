const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
	key: { type: String, unique: true, default: Date.now}
})



var User = mongoose.model('User', userSchema, 'myTable')

module.exports = User