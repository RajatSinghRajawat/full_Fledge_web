// routes/cart.js
const express = require('express');

// const CartItem = require('../models/CartItem');
const cartModel = require('../models/galleryModel');

// Add item to cart
const addcart = ('/add-to-cart', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cartItem = await cartModel.findOne({ productId });

    if (cartItem) {
      // If item already exists, update the quantity
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

module.exports = addcart;
