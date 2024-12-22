import axios from 'axios';
import { useEffect, useState } from 'react';
import UpdateProduct from './UpdateProduct';

const URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

const Productlist = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [editingProductId, setEditingProductId] = useState(null);

    // Fetch Product List
    const fetchProductList = async () => {
        const res = await axios.get(URL);
        if (res.data) {
            const products = Object.keys(res.data).map(key => ({ id: key, ...res.data[key] }));
            setData(products);
            setFilteredData(products);
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    // Handle Search
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = data.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.desc.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };

    // Handle Sort
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);
        let sortedData = [...filteredData];
        if (option === 'priceAsc') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (option === 'priceDesc') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (option === 'nameAsc') {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'nameDesc') {
            sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
        setFilteredData(sortedData);
    };

    // Remove Product
    const handleRemove = async (id) => {
        await axios.delete(`https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products/${id}.json`);
        alert('Product Removed');
        fetchProductList();
    };

    return (
        <div className="p-5">
            <div className="search-bar mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="sort-options mb-4">
                <select value={sortOption} onChange={handleSort} className="p-2 border border-gray-300 rounded">
                    <option value="">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="nameAsc">Name: A to Z</option>
                    <option value="nameDesc">Name: Z to A</option>
                </select>
            </div>

            <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.map(product => (
                    <div key={product.id} className="productcard border border-gray-300 rounded p-4 shadow-md">
                        <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
                        <h1 className="text-lg font-bold">{product.name}</h1>
                        <p>{product.desc}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: ₹{product.price}</p>
                        <div className="flex justify-between mt-2">
                            <button onClick={() => setEditingProductId(product.id)} className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                            <button onClick={() => handleRemove(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            {editingProductId && (
                <UpdateProduct
                    productId={editingProductId}
                    onClose={() => setEditingProductId(null)}
                    refreshList={fetchProductList}
                />
            )}
        </div>
    );
};

export default Productlist;