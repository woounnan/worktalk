
var mongoose = require('mongoose')
var User = require('./model')
var express = require('express')
var createError = require('http-errors')
var router = express.Router()


mongoose.connect('mongodb://webhacker.xyz:27017/users', {useNewUrlParser: true}, (err) =>{
	if(err) return console.error('connection error occured in test_mg.js + ['+err + ']')
	console.log('connection succeeded!')
});

console.log('running test pages of mongoose')
/*
const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
})
*/

router.get('/', (req, res) => {	
	console.log('wwW??')
	var users = new User({id: 'bob', password: 'bobob'})
	users.save( (e, users) =>{
		if(e) return console.error('login.js::10....occurred at users.save')
			console.log('User created')
	})
})


module.exports = router