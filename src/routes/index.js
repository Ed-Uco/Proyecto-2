const express = require('express');
const router = express.Router()
const indexController = require('./../controllers/indexController')
//Routes
router.get('/', indexController.home)

//Export
module.exports = router