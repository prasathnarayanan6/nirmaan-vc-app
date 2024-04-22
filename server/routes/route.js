const express = require('express');
const router = express.Router();
const {LoginController, UserRegister} = require('../controller/Controller');
router.post('/',LoginController);
router.post('/register', UserRegister);
module.exports = router;