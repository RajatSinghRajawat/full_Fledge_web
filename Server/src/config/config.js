// const mongoose = require('mongoose')
const mongoose = require('mongoose')

// const connectionDatabase = async () => {
//     // try {
//     //     return await mongoose.connect('mongodb://localhost:27017/myEccomercedatabase').then((value)=>{
//     //         console.log('connect with mongodb')
//     //     });
//     // } catch (error) {
//     //     console.error('Database connection error:', error);
//     // }
// }

// connectionDatabase();



const connectionDatabase = (url)=>{
    return mongoose.connect(url);
}



module.exports = connectionDatabase;