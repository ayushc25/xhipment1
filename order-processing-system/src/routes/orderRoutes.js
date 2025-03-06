const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');  // ✅ Make sure these functions exist
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createOrder);  // ✅ Route to create an order
router.get('/:id', authMiddleware, getOrder);   // ✅ Route to get an order

module.exports = router;
