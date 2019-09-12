var express = require('express')
var createError = require('http-errors')
var router = express.Router()


router.post('/', (req, res) => {
	const {id , pw} = req.body
	if(!id || !pw){
		console.log('id:'+id)
		console.log('pw:'+pw)
		console.log('failed login')
		return res.send({success: false, msg: 'invalid input values.'})
	}

	res.send({ success: true, toke: 'Login succeeded.'})
	console.log('succeeded login')
})




module.exports = router
