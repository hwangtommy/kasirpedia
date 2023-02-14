const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');
const { cashierProducts } = require('../controllers/cashier');

router.get("/", productController.getProducts);
router.get("/", cashierProducts.getProducts);
router.post("/products", cashierProducts.addProducts);
router.patch("/products", cashierProducts.editProducts) 
router.get("/category", cashierProducts.getCategory)    
router.get("/products", cashierProducts.getProductsbyCategory)    
router.post("/category", cashierProducts.addCategory)    
router.patch("/category", cashierProducts.editCategory)    

module.exports = router;