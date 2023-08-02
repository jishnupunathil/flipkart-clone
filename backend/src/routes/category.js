const express = require("express");
const { addCategory, getCategories } = require("../controllers/category");
const { requireSignIn, adminMiddleware } = require("../common-middleware");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/category/create',requireSignIn,adminMiddleware,upload.single('categoryImage'),addCategory)
router.get('/category/display',getCategories)

module.exports = router;