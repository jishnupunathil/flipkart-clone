const express = require("express");
// const { addCategory, getCategories } = require("../controllers/category");
const { requireSignIn, adminMiddleware } = require("../common-middleware");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const { createProduct } = require("../controllers/product");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage });

router.post('/product/create', upload.array("productPictures"),requireSignIn,createProduct)
router.get('/product/display')

module.exports = router;