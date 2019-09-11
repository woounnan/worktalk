var express = require('express')
var router = express.Router()
var createError = require('http-errors')

router.use('/login', require('./login'))


module.exports = router