const Product = require("../models/product");
const slugify = require("slugify");

exports.createProduct =async (req, res) => {
  try {
    const { name, price, description, category, quantity } = req.body;
    let productPictures = [];

    if (req.files.length > 0) {
      productPictures = req.files.map((file) => {
        return { img: file.filename }; // The file location should contain the image URL
      });
    }

    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      quantity,
      description,
      productPictures,
      category,
      createdBy: req.user._id,
    });

    await product.save()
      .then((product) => {
        res.status(201).json({ product, files: req.files });
      })
      .catch((err) => {
        return res.status(400).json({ error: err+'' });
      });
  } catch (err) {
    res.status(400).json({ error: err+'' });
  }
};
