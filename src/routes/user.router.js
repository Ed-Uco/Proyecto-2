const router = require('express').Router();

const { getProfile } = require('./../controllers/userController');

const { isLoggedIn } = require('./../middlewares/route-guard');
const userController =require('./../controllers/userController')

// EDIT
/* router.get('/:userID/edit', userController.viewEditUser);
router.post('/:userID/edit', userController.editUser); */
router.get('/:user', userController.viewEditUser);
router.post('/:user', userController.editUser);

// Routes
router.get('/:user', isLoggedIn, getProfile);

// Export
module.exports = router;
