import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../store/cart";
import './CartTab.css';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const calculateTotalPrice = () => {
    return carts.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className={`cart-tab-container ${statusTab === false ? "closed" : ""}`}>
      <div className="cart-tab-header">
        <h2>Shopping Cart</h2>
        <button onClick={handleCloseTabCart}>✕</button>
      </div>

      <div className="cart-tab-body">
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-tab-footer">
        <div className="total-container">
          <h3>Total:</h3>
          <p>💲{calculateTotalPrice().toFixed(2)}</p>
        </div>
        <div className="button-container">
          <button className="close-button" onClick={handleCloseTabCart}>CLOSE</button>
          <button className="checkout-button" disabled={carts.length === 0}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
