import { useState } from "react";
import axios from 'axios';
import './Addproduct.css'

const Addproducts = () => {
    const [product, setProduct] = useState({ name: "", desc: "", price: "", img: null, category: "" });

    const handleChange 
 = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProduct((prevProduct) => ({
                ...prevProduct,
                img: file
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = null;

        if (!product.img) {
            alert("Please upload an image.");
            return;
        }

        if (product.img) {
            const formData = new FormData();
            formData.append("file", product.img);
            formData.append("upload_preset", "demo_pro");

            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dktoauwg9/image/upload", formData);
            imageUrl = uploadRes.data.secure_url;
        }

        const productData = { ...product, img: imageUrl };

        await axios.post("https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json", productData);

        alert("Product added successfully!");
        setProduct({ name: "", desc: "", price: "", img: null });
        e.target.reset();
    };

    return (
        <div className="addlist p-5 border border-gray-300 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="block mb-2">Enter Product name</label>
                <input type="text" name="name" placeholder="Enter Product name"
                    value={product.name} onChange={handleChange} className="border border-gray-300 rounded p-2 mb-4 w-full" />

                <label htmlFor="desc" className="block mb-2">Enter description</label>
                <input type="text" name="desc" placeholder="Enter description"
                    value={product.desc} onChange={handleChange} className="border border-gray-300 rounded p-2 mb-4 w-full" />

                <select name="category" value={product.category} onChange={handleChange} className="border border-gray-300 rounded p-2 mb-4 w-full">
                    <option value="">Select a Category</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="dairy">Dairy</option>
                </select>

                <label htmlFor="price" className="block mb-2">Enter Product Price</label>
                <input type="number" name="price" placeholder="Enter Product price"
                    value={product.price} onChange={handleChange} className="border border-gray-300 rounded p-2 mb-4 w-full" />

                <label htmlFor="img" className="block mb-2">Enter Product Image</label>
                <input type="file" name="img" accept="image/*" onChange={handleImgChange} className="border border-gray-300 rounded p-2 mb-4 w-full" />

                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Addproducts;