const express = require('express');
const router = express.Router();
const LoginController = require('../controller/LoginController/LoginController');
router.post('/login', LoginController);
module.exports = router;