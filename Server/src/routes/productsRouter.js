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
const { updateUser } = require('../controllar/SingupController')

const router = express.Router();


//products
// router.post('/addProduct', addProduct)
// router.post("/multer" , upload.array("files") , multer)
router.post("/multer", upload.array("files"), addProduct)
router.get('/getProduct', getProduct)
router.get('/getProduct/:id', getProductID)
router.get('/products/category/:Categories_id', getProductsByCategory);
router.put("/updateProduct/:id", UpdateProduct)
router.delete("/Deleteproduct/:id", DeleteProduct);

//register

router.post('/signUpUser', userRegister)
router.post('/LogInUser', userLogin)
router.post('/LogOutUser', verification, userLogout)
router.put('/update/:id', updateUser)


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

module.exports = router

