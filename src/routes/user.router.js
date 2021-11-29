const express = require('express');
const router = express.Router();
const indexController = require('./../controllers/indexController');
console.log('test router');
//Routes
router.get('/', userController.home);

//Export
module.exports = router;
