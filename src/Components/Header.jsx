import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../store/cart";
import "../styles.css"; // Import the custom CSS file
import "./Header.css"; // Import the Header-specific CSS file

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <div className="cart-icon-container" onClick={handleOpenTabCart}>
        <img src={iconCart} alt="Cart" className="cart-icon" />
        <span className="cart-count">{totalQuantity}</span>
      </div>
    </header>
  );
};

export default Header;
