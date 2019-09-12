var mongoose = require('mongoose')
var User = require('./model')

console.log('running test pages of mongoose')
/*
const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
})
*/


var users = new User('Bobasdf', 'bobob')
users.save( ( e, user) =>{
	if(e) return console.error('login.js::10....occurred at users.save')
		console.log('User created')
})