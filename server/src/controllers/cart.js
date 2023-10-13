const Cart = require("../models/Cart");

exports.addCartItem = async (req, res) => {
  const _cart = await Cart.findOne({ user: req.user._id });
  if (_cart) {
    const product = req.body.cartItems.product;
    const item = _cart.cartItems.filter((c) => c.product == product);
    if (item) {
      Cart.findOneAndUpdate(
        { user: req.user._id, "cartItems.product": product },
        {
          $set: {
            cartItems: {
              ...req.body.cartItems,
              quantity: (item.quantity += req.body.cartItems.quantity),
            },
          },
        }
      ).then(() => {
        res.status(200).json({ _cart });
      });
    } else {
      Cart.findOneAndUpdate(
        { user: req.user._id },
        {
          $pull: {
            cartItems: req.body.cartItems,
          },
        }
      ).then(() => res.json({ new: _cart }));
    }
  } else {
    const new_Item = new Cart({
      user: req.user._id,
      cartItems: req.body.cartItems,
    });

    new_Item.save().then(() => {
      res.status(200).json({ new_Item });
    });
  }
};
