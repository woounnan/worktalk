var express = require('express')
var createError = require('http-errors')
var router = express.Router()
var User = require('./model')
const jwt = require('jsonwebtoken')

//login.js
//find the user and return a token generated 

router.post('/', (req, res) => {
	const {id , pw} = req.body
	User.findOne({id: id, password: pw}, (e, user) =>{
		if(e) {
			console.log('login failed')
			return res.send({code: 0})
		}
		console.log('find the user : ' + user.id)
		console.log('login succeeded')
		res.send({code: 1})
	})
})





module.exports = router
