var express = require('express')
var createError = require('http-errors')
var router = express.Router()
var User = require('./model')
const jwt = require('jsonwebtoken')



router.post('/', (req, res) => {
	const {id , pw} = req.body
	if(!id || !pw){
		console.log('failed login')
		return res.send({success: false, msg: 'invalid input values.'})
	}


	var users = new User(id, pw)

	users.save( ( e, user) =>{
		if(e) return console.error('login.js::10....occurred at users.save')
			console.log('User created')
	})
	res.send({success: true, msg: 'Create user successfully'})

})





module.exports = router
