const mongoose = require('mongoose');
const productModel = require('../models/allProductsModel');

const Category = require('../models/catgories');
const ApiFeatures = require('../utils/Apifeatures');

//add product //Admin 
const addProduct = async (req, res) => {
    try {
        // console.log(req.body, "files");
        let imageArray = req.files.map((file) => file.filename);
        // console.log(imageArray, "aray");

        var baseUrl = `http://${req.get("host")}`;
        baseUrl += "/Uploads/" + req.files[0].filename;

        const { productName, description, discount, price, reducedMRP, size, color, specialization, soldBy, leadTime, responseRate, features, Id, name, rating } = req.body;

        const uniqueId = new mongoose.Types.ObjectId().toString();
        const categorie = await Category.create({
            Id,
            name
        });

        const newProduct = await productModel.create({
            image: imageArray,
            productName,
            description,
            discount,
            price,
            reducedMRP,
            size,
            color,
            specialization,
            soldBy,
            leadTime,
            responseRate,
            rating,
            features,
            id: uniqueId,
            Categories_id: Id

        });

        // console.log(newProduct, "mm")
        res.status(201).json({ status: "001", message: "Product added successfully", product: newProduct, categorie });

    } catch (error) {
        console.error("Error adding product:", error);
        if (error.code === 11000) {

            res.status(400).json({ status: "003", message: "Duplicate product ID", error: "A product with this ID already exists" });
        } else {
            res.status(500).json({ status: "002", message: "Failed to add product", error: error.message });
        }
    }
}


// const getProduct = async (req, res) => {
//     try {

//         const { productName } = req.query;
//         const lowerCaseName = productName ? productName.toLowerCase() : '';

//         const query = productName ? { productName: { $regex: lowerCaseName, $options: 'i' } } : {};

//         const product = await productModel.find(query);

        // res.status(200).json({
        //     status: "001",
        //     message: 'Products fetched successfully',
        //     products: product,
        //     totalProducts: product.length
        // });
//     } catch (error) {
//         res.status(500).json({ status: "002", message: 'Failed to fetch products', error: error.message });
//     }
// }


const getProduct = async (req, res) => {
    try {
        // Initialize ApiFeatures with query and query string
        const resultPage = 100;
        // let a = await productModel.find({
        //     productName: {
        //         $regex: "iphone"
        //     }cd 
        // }).select('-password');
        
        // console.log(a,"sdfd")
        if(!req.query.keyword){
            req.query.keyword = ""
        }
        if(!req.query.rating){
            req.query.rating = ""
        }
        const apiFeature = new  ApiFeatures(productModel.find().select('-password'), req.query) // Excludes password
            .search()
            // .filter()
            .pagination(resultPage)

            console.log(apiFeature)
        // Execute the query
        const product = await apiFeature.query;
        // console.log('Fetched Products:', product);

        // Send response
        res.status(200).json({
            status: "001",
            message: 'Products fetched successfully',
            products: product,
            totalProducts: product.length
        });
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({
            status: "002",
            message: "Failed to fetch products",
            error: error.message,
        });
    }
};




const getProductID = async (req, res) => {
    const userid = req.params.id
    const all = await productModel.findById(userid)
    // console.log(all);
    res.send({ status: "001", message: "get One product", all })

}

//Update product //Admin 
const UpdateProduct = async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Update the product
        product = await productModel.findByIdAndUpdate(
            req.params.id,
            req.body
            // {
            //     new: true,
            //     runValidators: true,
            //     useFindAndModify: false
            // }
        );

        return res.status(200).json({ success: true, message: "Updated Successfully", product });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
const DeleteProduct = async (req, res) => {
    try {
        // Find the product by ID
        const product = await productModel.findById(req.params.id);

        // If the product doesn't exist
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Remove the product
        await product.remove();

        // Respond with success message
        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};


const getProductsByCategory = async (req, res) => {
    try {
        const { Categories_id } = req.params;
        const products = await productModel.find({ Categories_id });

        if (!products.length) {
            return res.status(404).json({
                status: "002",
                message: "No products found for this category",
            });
        }

        res.status(200).json({
            status: "001",
            message: "Products retrieved successfully",
            products
        });
    } catch (error) {
        res.status(500).json({
            status: "003",
            message: "Failed to retrieve products",
            error: error.message
        });
    }
};

module.exports = { addProduct, getProduct, getProductID, getProductsByCategory, UpdateProduct, DeleteProduct }
