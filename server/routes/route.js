const express = require('express');
const router = express.Router();
const {LoginController, UserRegister} = require('../controller/Controller');
router.post('/loginuser',LoginController);
router.post('/registeruser', UserRegister);
module.exports = router;