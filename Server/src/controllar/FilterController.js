const productModel = require("../models/allProductsModel");

const filterProduct = async (req, res) => {
    try {
        let { minPrice, maxPrice } = req.body;

        // Validate and parse prices
        minPrice = parseInt(minPrice) || 0; // Default to 0 if not provided
        maxPrice = parseInt(maxPrice) || Infinity; // Default to Infinity if not provided

        // Fetch products within the price range
        const allProducts = await productModel.find({
            price: { $gte: minPrice, $lte: maxPrice }
        });

        // Check if products exist and respond
        if (allProducts.length > 0) {
            res.status(200).json({ success: true, products: allProducts });
        } else {
            res.status(404).json({ success: false, message: "No products found in this price range." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

module.exports = filterProduct;
