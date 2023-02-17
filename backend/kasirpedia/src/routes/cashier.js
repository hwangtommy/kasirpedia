const express = require('express');
const router = express.Router();
const cashierProducts = require('../controllers/cashier');

router.get('/', cashierProducts.getProducts);
router.post('/products', cashierProducts.addProducts);
router.patch('/products', cashierProducts.editProducts);
router.get('/getcategory', cashierProducts.getCategory);
router.post('/productsbycat/:category_id', cashierProducts.getProductsbyCategory);
router.post('/category', cashierProducts.addCategory);
router.patch('/category', cashierProducts.editCategory);

module.exports = router;
