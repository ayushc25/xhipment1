const Inventory = require('../models/Inventory');

exports.checkStock = async (items) => {
  for (let item of items) {
    let product = await Inventory.findOne({ productId: item.productId });
    if (!product || product.stock < item.quantity) {
      return false;  // Out of stock
    }
  }
  return true;  // Stock available
};

exports.updateStock = async (items) => {
  for (let item of items) {
    await Inventory.updateOne(
      { productId: item.productId },
      { $inc: { stock: -item.quantity } }
    );
  }
};
