var express = require('express')
var createError = require('http-errors')
var router = express.Router()
var User = require('./model')
const jwt = require('jsonwebtoken')


//login.js
//find the user and return a token generated 

router.post('/', (req, res) => {
	const {id , pw} = req.body;
	User.findOne({id: id, password: pw}, (e, user) =>{
		if(e) {
			console.log('error occurred')
			console.error(e)
			return res.send({code: 0})
		}
		if(!user){
			console.log('login failed')
			return res.send({code: 0})
		}
		console.log('login succeeded')
		//generate a token
		jwt.sign({user.id, user.pw}, user.key, (e, token) =>{
			if(e) return res.send({code: 0, msg: 'error on token'})
			res.send({code: 1, tk: token})
		})
	})
})





module.exports = router
