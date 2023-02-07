const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { validate2, userValidator } = require('../middlewares/validator');

router.post('/v1', userValidator(), validate2, authController.registerV2);

module.exports = router;
