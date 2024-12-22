import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart"; // Ensure this import is correct
import { Link } from "react-router-dom";

const ProductCart = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: data.id,
        quantity: 1,
        name: data.name,
        price: data.price,
        image: data.img,
      })
    );
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${data.id}`}>
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-64 object-cover object-center rounded-lg mb-4"
        />
      </Link>
      <h3 className="text-lg font-medium mb-2">{data.name}</h3>
      {/* <p className="text-gray-600 text-sm mb-3">{data.desc}</p> */}
      <p className="text-lg font-semibold text-gray-800 mb-4">💲{data.price}</p>
      
      <button
        onClick={handleAddToCart}
        className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-400 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCart;
