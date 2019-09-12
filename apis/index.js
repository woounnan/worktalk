var express = require('express')
var router = express.Router()
var createError = require('http-errors')

console.log('here is at api.js')
router.use('/login', require('./login'))

router.use('/test', require('./test_mg'))
module.exports = router