const express = require('express');
const router = express.Router();
const cashierProducts = require('../controllers/cashier');

router.get("/", cashierProducts.getProducts);

module.exports = router;