var mongoose = require('mongoose')


console.log('running test pages of mongoose')

const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
})

var User = mongoose.model('test', userSchema)

var users = new User('Bob', 'bobob')
users.save( ( e, user) =>{
	if(e) return console.error('login.js::10....occurred at users.save')
		console.log('User created')
})