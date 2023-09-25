const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const ProductsController = require('../controllers/products');


router.get('/', ProductsController.getAllProducts);
router.get('/:productId', ProductsController.getProductById);
router.post('/', auth, ProductsController.createProduct);
router.patch('/:productId', auth, ProductsController.updateProductById);
router.delete('/:productId', auth, );

module.exports = router;