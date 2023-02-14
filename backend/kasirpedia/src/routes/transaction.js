const express = require('express');
const router = express.Router();
const { transactionController } = require('../controllers');

router.post("/", transactionController.createTransation);
router.get("/", transactionController.transactionByDate);
router.get("/daily", transactionController.transactionDaily);

module.exports = router;