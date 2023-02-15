const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { validate2, userValidator } = require('../middlewares/validator');

router.post('/v1', userValidator(), validate2, authController.registerV2);
router.get('/', authController.getUsers);
router.post('/v2', authController.login)
router.patch('/v3/:id', authController.editProfile);
router.patch('/v4/:id', authController.aturStatus);

module.exports = router;
