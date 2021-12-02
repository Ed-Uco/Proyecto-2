const router = require('express').Router();

const { getProfile } = require('./../controllers/userController');

const { isLoggedIn } = require('./../middlewares/route-guard');
const userController =require('./../controllers/userController')

router.get('/:userID/editUser', userController.viewEditUser);
router.post('/:userID/editUSer', userController.editUser);

// Routes
router.get('/:user', isLoggedIn, getProfile);

// Export
module.exports = router;
