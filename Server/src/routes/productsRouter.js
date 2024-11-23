const express = require('express')
const { addProduct, getProduct, getProductID, getProductsByCategory } = require('../controllar/allProductsController')

// const multer = require('multer')
const upload = require('../../multer')
const addcart = require('../controllar/cartControllar')
const { userLogin } = require('../controllar/SingupController')
const { userRegister } = require('../controllar/SingupController')
const { userLogout } = require('../controllar/SingupController')
const { verify } = require('jsonwebtoken')
const verification = require('../midddleware/Usermiddleware')

const router = express.Router()

// router.post('/addProduct', addProduct)
// router.post("/multer" , upload.array("files") , multer)
router.post("/multer" , upload.array("files") , addProduct)
router.get('/getProduct', getProduct)
router.get('/getProduct/:id', getProductID)
router.post("/cart" , addcart)
router.get('/products/category/:Categories_id', getProductsByCategory);

router.post('/signUpUser' , userRegister)
router.post('/LogInUser' , userLogin)
router.post('/LogOutUser' ,verification,  userLogout)




module.exports = router

