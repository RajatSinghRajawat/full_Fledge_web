
const productModel = require('../models/allProductsModel');
const cartModel = require('../models/cartModel');



const addCart = async (req, res) => {
  const { productId, quantity } = req.body;
  // const userId = req.user._id; // User ID is now extracted from the middleware
  const userId = req.body.userId;

  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if user has an existing cart
    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      // Create a new cart if none exists
      cart = new cartModel({ userId, Products: [], totalPrice: 0 });
    }

    // Check if the product is already in the cart
    const existingProduct = cart.Products.find(
      (item) => item.productId.toString() === productId
    );

    if (existingProduct) {
      // Update quantity if product exists
      existingProduct.quantity += quantity;
    } else {
      // Add new product to the cart
      cart.Products.push({ productId, quantity });
    }

    // Recalculate total price
    cart.totalPrice = cart.Products.reduce((total, item) => {
      const itemPrice = item.productId.toString() === productId ? product.price : 0;
      return total + itemPrice * item.quantity;
    }, 0);


    //     //cart.Products.reduce:
    // Ye method array ke sabhi products ko iterate karta hai aur ek single value(total price) calculate karta hai.

    //       item.productId.toString() === productId:
    // Ye check karta hai ki jo current item hai uska productId match karta hai kya diya gaya productId ke saath.Agar match karta hai, toh uski updated price le lega; agar nahi, toh 0.

    //     itemPrice * item.quantity:
    // Har item ki total price calculate karta hai(price × quantity).

    //       total:
    // Ye sabhi products ka total price maintain karta hai aur reduce ke har iteration me update hota hai.

    await cart.save();

    res.status(200).json({
      message: 'Product added to cart successfully',
      cart,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error });
  }
};

const getCart = async (req, res) => {
  const userId = req.query.userId;
  console.log(userId)

  try {
    const cart = await cartModel.findOne({userId}).populate('Products.productId');
    // const cart = await cartModel.findOne().populate('products.productId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json({
      message: 'Cart retrieved successfully',
      cart,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
};


// const removeCart = async (req, res) => {
//   const { productId } = req.body;
//   const userId = req.user.id; // Extract from JWT token

//   try {
//     // Find user's cart
//     let cart = await cartModel.findOne({ userId });

//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

//     // Find the product in the cart
//     const productIndex = cart.Products.findIndex(
//       (item) => item.productId.toString() === productId
//     );

//     if (productIndex === -1) {
//       return res.status(404).json({ message: 'Product not found in cart' });
//     }

//     // Remove the product from the cart
//     cart.Products.splice(productIndex, 1);

//     // Recalculate total price
//     cart.totalPrice = cart.Products.reduce((total, item) => {
//       const itemPrice = item.productId.price || 0;
//       return total + itemPrice * item.quantity;
//     }, 0);

//     await cart.save();

//     res.status(200).json({
//       message: 'Product removed from cart successfully',
//       cart,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error removing product from cart', error });
//   }
// };


module.exports = { addCart, getCart };
