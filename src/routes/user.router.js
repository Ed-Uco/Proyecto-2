const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');

const routeGuard = require('./../middlewares/route-guard');
console.log('El routeGuard importado es: ', routeGuard.usuarioLoggeado);

//2. RUTEO
router.get('/profile', routeGuard.usuarioLoggeado, userController.getProfile);

module.exports = router;
