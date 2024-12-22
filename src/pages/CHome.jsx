import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCart from "../Components/ProductCart";
import "./CHome.css"; // Import the custom CSS file

const API_URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

export function CHome() {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(API_URL);
        const productArray = res.data
          ? Object.entries(res.data).map(([id, product]) => ({ id, ...product }))
          : [];
        setProducts(productArray);
        setFilteredData(productArray);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Search Functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.desc.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  // Sort Functionality
  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sorted = [...filteredData];

    if (option === "priceAsc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === "priceDesc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "nameAsc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "nameDesc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredData(sorted);
  };

  // Filter Functionality
  const handleFilter = (e) => {
    const category = e.target.value;
    setFilterOption(category);

    if (category === "all") {
      setFilteredData(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Header */}
      <div className="welcome-header">
        <h1>Welcome to Farm2Kitchen</h1>
        <p>Discover our wide range of fresh, organic products sourced directly from farmers.</p>
      </div>

      {/* Search, Sort, and Filter */}
      <div className="controls-container">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Sort Options */}
        <select value={sortOption} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>

        {/* Filter Options */}
        <select value={filterOption} onChange={handleFilter}>
          <option value="all">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredData.length > 0 ? (
          filteredData.map((product) => <ProductCart key={product.id} data={product} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
