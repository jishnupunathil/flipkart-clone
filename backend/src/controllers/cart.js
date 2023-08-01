const Cart=require('../models/cart')


exports.addtocart = (req, res) => {
    try {
      Cart.findOne({ user: req.user._id })
        .then((cartExist) => {
          if (cartExist) {
            const product = req.body.cartItems.product;
            const item = cartExist.cartItems.find((c) => c.product == product);
  
            if (item) {
              // Update the quantity of the existing item
              Cart.findOneAndUpdate(
                {
                  user: req.user._id,
                  "cartItems.product": product,
                },
                {
                  $set: {
                    "cartItems.$.quantity": item.quantity + req.body.cartItems.quantity,
                  },
                }
              )
                .then((cart) => {
                  res.status(200).json({ success: 'updated product quantity', cart });
                })
                .catch((err) => {
                  res.status(400).json({ err });
                });
            } else {
              // Add the new item to the cart
              Cart.findOneAndUpdate(
                { user: req.user._id },
                {
                  $push: {
                    cartItems: req.body.cartItems,
                  },
                }
              )
                .then((cart) => {
                  res.status(200).json({ success: 'new item added to cart', cart });
                })
                .catch((err) => {
                  res.status(400).json({ err });
                });
            }
          } else {
            // Create a new cart and add the item to it
            const cart = new Cart({
              user: req.user._id,
              cartItems: [req.body.cartItems],
            });
  
            cart
              .save()
              .then((cart) => {
                res.status(200).json({ success: 'added to user cart', cart });
              })
              .catch((err) => {
                res.status(400).json({ err });
              });
          }
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
    } catch (err) {
      res.status(400).json({ err });
    }
  };