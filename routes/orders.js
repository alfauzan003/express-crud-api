const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const OrdersController = require('../controllers/orders');

router.get('/',  auth, OrdersController.getAllOrders);
router.post('/', auth, OrdersController.createOrder);
router.get('/:orderId', auth, OrdersController.getOrderById);
router.delete('/:orderId', auth, OrdersController.deleteOrderById);

module.exports = router;