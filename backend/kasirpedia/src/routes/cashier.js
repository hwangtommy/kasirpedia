const express = require('express');
const router = express.Router();
const cashierProducts = require('../controllers/cashier');

router.get("/", cashierProducts.getProducts);
router.get("/", cashierProducts.searchProducts);

module.exports = router;