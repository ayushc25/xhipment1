const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },  // ✅ Unique Order ID
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // ✅ Reference to User
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },  // ✅ Total Order Amount
  status: { type: String, enum: ['pending', 'processing', 'completed'], default: 'pending' },  // ✅ Order Status
}, { timestamps: true });  // ✅ Automatically adds createdAt & updatedAt fields

module.exports = mongoose.model('Order', orderSchema);

