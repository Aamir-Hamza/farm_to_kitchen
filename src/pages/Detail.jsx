import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const API_URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

const Detail = () => {
  const { id } = useParams();  // Now using 'id' from the URL
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(API_URL);
        const products = res.data
          ? Object.entries(res.data).map(([id, product]) => ({
              id,
              ...product,
            }))
          : [];

        const product = products.find((product) => product.id === id);  // Find the product by 'id'
        if (product) {
          setDetail(product);
        } else {
          console.warn("Product not found. Redirecting to home...");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
        navigate("/");
      }
    };

    fetchDetail();
  }, [id, navigate]);

  const handleMinusQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(
        addToCart({
          productId: detail.id,
          quantity,
          name: detail.name,
          price: detail.price,
          image: detail.img,
          description: detail.desc || "No description available.",
        })
      );
    }
  };

  if (!detail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.img} alt={detail.name} className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <p className="font-bold text-3xl">{detail.description}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p className="text-gray-600 mt-4">{detail.desc || "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
