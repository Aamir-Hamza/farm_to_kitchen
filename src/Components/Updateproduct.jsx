import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProduct.css';

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
        <div className="update-product-modal">
            <div className="modal-content">
                <h2>Update Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="desc"
                            value={product.desc}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Category:
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="dairy">Dairy</option>
                        </select>
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="img"
                            value={product.img}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div className="modal-actions">
                        <button type="submit">Update</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;