import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

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
    <div className="flex items-center justify-between mb-4 bg-gray-800 p-4 rounded-md">
      <img src={data.image} alt={data.name} className="w-20 h-20 object-cover rounded-md" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-white">{data.name}</h3>
        <p className="text-sm text-gray-400">{data.desc}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500"
          onClick={handleDecrementQuantity}
        >
          -
        </button>
        <span className="text-white">{data.quantity}</span>
        <button
          className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-500"
          onClick={handleIncrementQuantity}
        >
          +
        </button>
        <button
          className="text-red-500 px-3 py-1 rounded hover:bg-red-600"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
      <p className="text-lg font-semibold text-white">💲{(data.price * data.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
