const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const UsersController = require('../controllers/users');

router.post('/login', UsersController.login);
router.post('/signup', UsersController.signup);
router.delete('/:userId', auth, UsersController.deleteUserById);

module.exports = router;
