const mongoose = require('mongoose');
const productModel = require('../models/allProductsModel');
const Gallery = require('../models/galleryModel');
const Category = require('../models/catgories');


// const addProduct = async (req, res) => {
//     try {
//         const { productName, description, discount, price, reducedMRP, image, id } = req.body;

//         const productS = await productModel.create({ productName, description, discount, price, reducedMRP, image, id })
//         res.status(201).json({status:"001", message: 'Product added successfully', product: productS });
//     } catch (error) {
//         res.status(500).json({status:"001", message: 'Failed to add product', error: error.message });
//     }
// }



const addProduct = async (req, res) => {
    try {
        // console.log(req.body, "files");
        let imageArray = req.files.map((file) => file.filename);
        // console.log(imageArray, "aray");

        var baseUrl = `http://${req.get("host")}`;
        baseUrl += "/Uploads/" + req.files[0].filename;

        const { productName, description, discount, price, reducedMRP, size, color, specialization, soldBy, leadTime, responseRate, features, Categories_id, Id, name } = req.body;

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
//         const product = await productModel.find(); // Fetch all products

//         res.status(200).json({
//             status: "001",
//             message: 'Products fetched successfully',
//             product
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: "002",
//             message: 'Failed to fetch products',
//             error: error.message
//         });
//     }
// };

const getProduct = async (req, res) => {
    try {

        const { productName } = req.query;
        const lowerCaseName = productName ? productName.toLowerCase() : '';

        const query = productName ? { productName: { $regex: lowerCaseName, $options: 'i' } } : {};

        const product = await productModel.find(query);

        res.status(200).json({
            status: "001",
            message: 'Products fetched successfully',
            products: product,
            totalProducts: product.length
        });
    } catch (error) {
        res.status(500).json({ status: "002", message: 'Failed to fetch products', error: error.message });
    }
}

const getProductID = async (req, res) => {
    const userid = req.params.id
    const all = await productModel.findById(userid)
    // console.log(all);
    res.send({ status: "001", message: "get One product", all })

}

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





module.exports = { addProduct, getProduct, getProductID ,getProductsByCategory }
