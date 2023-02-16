const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');

router.get('/', productController.getProducts);
router.get('/', productController.getProducts);
// router.post('/products', productController.addProducts);
// router.patch('/products', productController.editProducts);
// router.get('/category', productController.getCategory);
// router.get('/products', productController.getProductsbyCategory);
// router.post('/category', productController.addCategory);
// router.patch('/category', productController.editCategory);

module.exports = router;
