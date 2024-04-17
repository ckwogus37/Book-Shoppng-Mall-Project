const express = require('express');
const router = express.Router();
const {addToCart, getCartItems, removeCartItem} = require('../controller/CartController');

router.use(express.json());

router.post('/', addToCart)
router.get('/', getCartItems) 

router.delete('/:cartItems_id',removeCartItem)


module.exports = router;