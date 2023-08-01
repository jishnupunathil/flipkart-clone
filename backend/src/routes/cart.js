const express = require("express");
const { requireSignIn, userMiddleware } = require("../common-middleware");
const { addtocart } = require("../controllers/cart");
const router = express.Router();

router.post('/user/cart/addToCart',requireSignIn,userMiddleware,addtocart)

module.exports = router;