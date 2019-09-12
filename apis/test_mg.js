
var mongoose = require('mongoose')
var User = require('./model')
var express = require('express')
var createError = require('http-errors')
var Router = express.Router()
console.log('running test pages of mongoose')
/*
const userSchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true, trim: true, index: true},
	password: { type: String, required: true, unique: true, trim: true }
})
*/

router.get('/test', (res, req) => {	
	var users = new User({id: 'bob', password: 'bobob'})
	users.save( ( e, user) =>{
		if(e) return console.error('login.js::10....occurred at users.save')
			console.log('User created')
	})
})


module.exports = Router