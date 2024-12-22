import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = ({ productId, onClose, refreshList }) => {
    const [product, setProduct] = useState({
        name: '',
        desc: '',
        category: '',
        img: '',
        price: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products/${productId}.json`);
            if (res.data) {
                setProduct(res.data);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products/${productId}.json`, product);
        alert('Product updated successfully!');
        onClose();
        refreshList();
    };

    return (
        <div className="update 
-product-modal fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-content bg-white p-5 rounded shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Update Product</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <label className="block mb-2">Description:</label>
                    <textarea
                        name="desc"
                        value={product.desc}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <label className="block mb-2">Category:</label>
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    >
                        <option value="">Select Category</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="dairy">Dairy</option>
                    </select>
                    <label className="block mb-2">Image URL:</label>
                    <input
                        type="text"
                        name="img"
                        value={product.img}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <label className="block mb-2">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 mb-4 w-full"
                    />
                    <div className="modal-actions flex justify-between mt-4">
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Update</button>
                        <button type="button" onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;