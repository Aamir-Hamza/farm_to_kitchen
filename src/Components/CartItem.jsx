import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";
import './CartItem.css';  // Make sure to import the CSS file

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(changeQuantity({ productId: data.productId, quantity: 0 }));
  };

  const handleDecrementQuantity = () => {
    if (data.quantity > 1) {
      dispatch(changeQuantity({ productId: data.productId, quantity: data.quantity - 1 }));
    }
  };

  const handleIncrementQuantity = () => {
    dispatch(changeQuantity({ productId: data.productId, quantity: data.quantity + 1 }));
  };

  return (
    <div className="cart-item-container">
      <img src={data.image} alt={data.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-title">{data.name}</h3>
        <p className="cart-item-desc">{data.desc}</p>
      </div>
      <div className="cart-item-actions">
        <button className="cart-item-button" onClick={handleDecrementQuantity}>-</button>
        <span className="text-white">{data.quantity}</span>
        <button className="cart-item-button" onClick={handleIncrementQuantity}>+</button>
        <button className="cart-item-remove" onClick={handleRemoveItem}>Remove</button>
      </div>
      <p className="cart-item-price">💲{(data.price * data.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
