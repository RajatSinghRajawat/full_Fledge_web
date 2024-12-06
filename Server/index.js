const express = require('express');
const connectionDatabase = require('./src/config/config');
const router = require('./src/routes/productsRouter');
const cors = require('cors')
const morgan = require('morgan')
const ratelimit = require("express-rate-limit")
const app = express();
app.use(cors({origin:"*"}))
// app.use(morgan('dev'))



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public/Uploads"))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(router)


//RATELIMIT***************
const limiter  = ratelimit({
    windowMs: 60*1000, //1 minute window
    max:100, //limit each IP to 100 requestes per windowMs
    message : 'too maany requests from this IP , please try again later'
})

app.use(limiter)



connectionDatabase("mongodb://127.0.0.1:27017/myEccomercedatabase").then((value)=>{
    console.log('connect with mongodb')
}).catch((error)=>{
        console.log(error);
        
})



app.listen(5000,()=>{
    console.log('connect with server on port 8080');
})