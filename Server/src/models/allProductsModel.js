const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: [true, "Please Entrer Product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Entrer Product Descriptionn"],
    },
    discount: {
        type: Number,

    },
    price: {
        type: Number,
        required: [true, "Please Entrer Product Price"],
        maxLength: [8, "Price cannot be exceed 8 char"]

    },
    reducedMRP: {
        type: Number,
    },
    image: {
        type: [],

    },
    rating: {
        type: String,
        default: 0
    },
    id: {
        type: String,
        // required: true,
        // unique: true
    }
    ,
    color: {
        type: [String],
    },
    size: {
        type: [String],
    },
    specialization: {
        type: String,
    },
    soldBy: {
        type: String,
        required: true
    },
    leadTime: {
        type: String,
    },
    responseRate: {
        type: Number,
        min: 0,
        max: 100
    },
    features: {
        type: [String],
    },
    Categories_id: {
        type: Number,

    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ]

})


const productModel = mongoose.model('product', productSchema)

module.exports = productModel;
