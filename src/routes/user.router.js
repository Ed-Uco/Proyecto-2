const router = require('express').Router();

const { getProfile } = require('./../controllers/userController');

const { isLoggedIn } = require('./../middlewares/route-guard');
const userController =require('./../controllers/userController')



// Routes
router.get('/:user', isLoggedIn, getProfile);
// EDIT
router.get('/:user', userController.viewEditUser);
router.post('/:user', userController.editUser);
// Export
module.exports = router;
