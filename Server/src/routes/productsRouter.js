const express = require('express')
const { addProduct, getProduct, getProductID, getProductsByCategory, UpdateProduct, DeleteProduct } = require('../controllar/allProductsController')

// const multer = require('multer')
const upload = require('../../multer')
const { userLogin } = require('../controllar/SingupController')
const { userRegister } = require('../controllar/SingupController')
const { userLogout } = require('../controllar/SingupController')
const { verify } = require('jsonwebtoken')
const verification = require('../midddleware/Usermiddleware')
const { addCart, getCart, removeCart } = require('../controllar/cartControllar')
const { addProfile, getAllProfiles } = require('../controllar/ProfileCntroller')
const { addPoster, getPoster, updatePoster, deletePoster } = require('../controllar/posterController')
const { updateUser,getData } = require('../controllar/SingupController')
const { newOrder, getSingleOrder } = require('../controllar/orderController')
const filterProduct = require('../controllar/FilterController')
const { get } = require('../controllar/SingupController')

const router = express.Router();

//products
// router.post('/addProduct', addProduct)
// router.post("/multer" , upload.array("files") , multer)
router.post("/multer", upload.array("files"), addProduct)
router.get('/getProduct', getProduct)
router.get('/getProduct/:id', getProductID)
router.get('/products/category/:Categories_id', getProductsByCategory);
router.put("/updateProduct/:id", upload.array("files"), UpdateProduct)
router.delete("/Deleteproduct/:id", DeleteProduct);
router.post("/filterProduct", filterProduct)

//register

router.post('/signUpUser', userRegister)
router.post('/LogInUser', userLogin)
router.post('/LogOutUser', verification, userLogout)
router.put('/update/:id', upload.array("files"), updateUser)
router.get('/getDetails/:id',getData)
router.get('/get',get)

//cart
router.post('/addtocart', addCart)
router.get('/getcart', getCart)
router.get('/removeCart', removeCart)


//Poster 
router.post('/addPoster', upload.array("files"), addPoster);
router.get('/getPoster', getPoster);
router.delete('/deletePoster:id', deletePoster);
router.put('/updatePoster:id', updatePoster)


//Porifle
router.post('/addprofile', upload.array("files"), addProfile)
router.get('/getprofile', getAllProfiles)


//orders

router.post("/addOrders", newOrder)
router.get("/getSingleOrders", getSingleOrder)



module.exports = router

