var express = require('express')
var createError = require('http-errors')
var router = express.Router()
var User = require('./model')
const jwt = require('jsonwebtoken')

//login.js
//find the user and return a token generated 

router.post('/', (req, res) => {
	const {id , pw} = req.body
	if(!id || !pw){
		console.log('failed login')
		return res.send({code: 0})
	}

	res.send({code: 1})

})





module.exports = router
