const router = require('express').Router();

const { getProfile } = require('./../controllers/userController');

const { isLoggedIn } = require('./../middlewares/route-guard');

// Routes
router.get('/:user', isLoggedIn, getProfile);

// Export
module.exports = router;
