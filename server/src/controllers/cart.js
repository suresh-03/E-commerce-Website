const Cart = require("../models/Cart");

exports.addCartItem = (req, res) => {
  const new_Item = new Cart({
    user: req.user._id,
    cartItems: req.body.cartItems,
  });

  new_Item
    .save()
    .then(() => {
      res.status(200).json({ new_Item });
    })
    .catch((err) => res.status(400).json({ err }));
};
