// routes/cart.js
const express = require('express');
const cartModel = require('../models/cartModel');
// Add item to cart
const addcart = ('/add-to-cart', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cartItem = await cartModel.findOne({ productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Otherwise, create a new cart item
      cartItem = new CartItem({ userId, productId, quantity });
      await cartItem.save();
    }

    res.status(200).json(cartItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});


// Get cart items
const getCart = async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    
    if (!cartItems.length) {
      return res.status(404).json({
        status: "002",
        message: "Cart is empty"
      });
    }

    res.status(200).json({
      status: "001", 
      message: "Cart items retrieved successfully",
      items: cartItems
    });

  } catch (error) {
    res.status(500).json({
      status: "003",
      message: "Failed to retrieve cart items",
      error: error.message
    });
  }
};


module.exports = addcart;
