import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../stores/cart";

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
    <div
      className={`fixed top-0 right-0 bg-gray-800 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_100px] 
      transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ""}`}
    >
      <div className="flex items-center justify-between p-5 text-white bg-gray-900 shadow-md">
        <h2 className="text-2xl font-medium">Shopping Cart</h2>
        <button
          className="text-lg bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          onClick={handleCloseTabCart}
        >
          ✕
        </button>
      </div>

      <div className="p-5 overflow-y-auto">
        {carts.length > 0 ? (
          carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))
        ) : (
          <p className="text-white text-center">Your cart is empty.</p>
        )}
      </div>

      <div className="p-5 bg-gray-900 shadow-inner">
        <div className="flex justify-between items-center mb-4 text-white">
          <h3 className="text-lg font-medium">Total:</h3>
          <p className="text-xl font-bold">💲{calculateTotalPrice().toFixed(2)}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="bg-black text-white py-2 rounded hover:bg-gray-800"
            onClick={handleCloseTabCart}
          >
            CLOSE
          </button>
          <button
            className="bg-amber-600 text-white py-2 rounded hover:bg-amber-500"
            disabled={carts.length === 0}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
