const express = require('express');
const router = express.Router();

const checkToken = require('../middlewares/checkToken');
const userController = require('../controllers/UserController');

// Open Route - Public Route
router.get('/home', userController.home);
// Private Route
router.get('/user/:id', checkToken, userController.userLogged);
// Register User
router.post('/auth/register', userController.userRegister);
// Login User
router.post('/auth/login', userController.userLogin);



module.exports = router;