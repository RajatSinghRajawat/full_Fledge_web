const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    discount: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    reducedMRP: {
        type: Number,
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
    Categories_id:{
        type:Number,

    }
    
})


const productModel = mongoose.model('product', productSchema)

module.exports = productModel;
