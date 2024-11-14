const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reducedMRP: {
        type: Number,
        required: true
    },
    image: {
        type: [],
        
    },
    id: {
        type: String,
        // required: true,
        // unique: true
    }
    ,
    color: {
        type: [String],
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    soldBy: {
        type: String,
        required: true
    },
    leadTime: {
        type: String,
        required: true
    },
    responseRate: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    features: {
        type: [String],
        required: true
    },
    Categories_id:{
        type:Number,
        required: true

    }
    
})


const productModel = mongoose.model('product', productSchema)

module.exports = productModel;
