const Order = require('../models/Order');
const { v4: uuidv4 } = require('uuid');  // ✅ UUID for unique order ID
const emailService = require('../services/emailService');


exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const orderId = uuidv4();
    
    const newOrder = await Order.create({ 
      orderId, 
      userId: req.user.id, 
      items, 
      totalAmount 
    });

    // ✅ Fetch user email from the database
    const user = await User.findById(req.user.id);
    
    // ✅ Send email notification
    await emailService.sendOrderConfirmation(user.email, newOrder);

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    // ✅ Check Redis cache first
    const cachedOrder = await redisClient.get(orderId);
    if (cachedOrder) {
      console.log("✅ Order fetched from Redis cache");
      return res.json(JSON.parse(cachedOrder));
    }

    // ✅ If not cached, fetch from DB
    const order = await Order.findById(orderId).populate('userId', 'email');
    if (!order) return res.status(404).json({ error: "Order not found" });

    // ✅ Store in Redis (cache expires in 10 minutes)
    await redisClient.setEx(orderId, 600, JSON.stringify(order));

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};