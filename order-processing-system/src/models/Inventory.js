const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productId: { type: String, unique: true, required: true },
  stock: { type: Number, required: true }
});

module.exports = mongoose.model("Inventory", InventorySchema);
