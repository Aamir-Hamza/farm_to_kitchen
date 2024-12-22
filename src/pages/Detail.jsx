import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import './Detail.css'; // Import the CSS file

const API_URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(API_URL);
        const products = res.data
          ? Object.entries(res.data).map(([id, product]) => ({ id, ...product }))
          : [];

        const product = products.find((product) => product.id === id);
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
    <div className="product-container">
      <h2 className="product-title">PRODUCT DETAIL</h2>
      <div className="product-details">
        <div>
          <img src={detail.img} alt={detail.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-name">{detail.name}</h1>
          <p className="product-price">${detail.price}</p>
          <p className="product-description">{detail.description}</p>
          <div className="quantity-controls">
            <button
              className="quantity-button"
              onClick={handleMinusQuantity}
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button
              className="quantity-button"
              onClick={handlePlusQuantity}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          <p className="product-desc">{detail.desc || "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
