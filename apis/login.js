var express = require('express')
var createError = require('http-errors')
var router = express.Router()


router.get('/', (req, res) => {
	const {id , pwd} = req.body
	if(!id || !pwd){
		console.log('failed login')
		return res.send({success: false, msg: 'invalid input values.'})
	}

	res.send({ success: true, toke: 'Login succeeded.'})
	console.log('succeeded login')
})

router.post('/', (req, res) => {
	const {id , pwd} = req.body
	if(!id || !pwd){
		console.log('failed login')
		return res.send({success: false, msg: 'invalid input values.'})
	}

	res.send({ success: true, toke: 'Login succeeded.'})
	console.log('succeeded login')
})




module.exports = router
