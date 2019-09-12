const mongoose = require('mongoose')

const abcSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
})



var User = mongoose.model('User1', abcSchema, 'userCol1')

module.exports = User