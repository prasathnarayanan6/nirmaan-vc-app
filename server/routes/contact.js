const express = require('express');
const router = express.Router();
const {addcontactController, readContactController} = require('../controller/contactController');
router.post('/',addcontactController);
module.exports = router;