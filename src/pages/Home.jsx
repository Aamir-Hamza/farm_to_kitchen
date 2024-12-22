import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCart from "../Components/ProductCart";

const API_URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

export function Home() {
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
          ? Object.entries(res.data).map(([id, product]) => ({
              id,
              ...product,
            }))
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
      <div className="text-center py-10 bg-green-100">
        <h1 className="text-4xl font-bold text-green-700">Welcome to Farm2Kitchen</h1>
        <p className="mt-3 text-gray-600">
          Discover our wide range of fresh, organic products sourced directly from farmers.
        </p>
      </div>

      {/* Search, Sort, and Filter */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-center items-center my-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border border-gray-300 rounded-lg w-full md:w-1/3"
        />

        {/* Sort Options */}
        <select
          value={sortOption}
          onChange={handleSort}
          className="p-3 border border-gray-300 rounded-lg w-full md:w-1/5"
        >
          <option value="">Sort By</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>

        {/* Filter Options */}
        <select
          value={filterOption}
          onChange={handleFilter}
          className="p-3 border border-gray-300 rounded-lg w-full md:w-1/5"
        >
          <option value="all">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((product) => <ProductCart key={product.id} data={product} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found</p>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-10 p-5 border-t border-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-700">Farm2Kitchen</h2>
          <p className="mt-2 text-gray-600">
            Connecting farmers to customers with sustainable and organic produce.
          </p>

          <div className="flex justify-center gap-4 mt-5">
            <a
              href="/about"
              className="text-green-600 hover:text-green-800 transition duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-green-600 hover:text-green-800 transition duration-200"
            >
              Contact
            </a>
            <a
              href="/terms"
              className="text-green-600 hover:text-green-800 transition duration-200"
            >
              Terms & Conditions
            </a>
          </div>

          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Farm2Kitchen. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
