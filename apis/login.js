var express = require('express')
var createError = require('http-errors')
var router = express.Router()
var User = require('./model')
const jwt = require('jsonwebtoken')

//login.js
//find the user and return a token generated 
console.log('what happenning occured now?')

router.post('/', (req, res) => {
	const {id , pw} = req.body
	if(!id || !pw){
		console.log('failed login')
		return res.send({code: 0, msg: 'invalid input values.'})
	}

	res.send({code: 1, msg: 'Create user successfully'})

})





module.exports = router
