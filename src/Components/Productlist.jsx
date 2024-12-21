import axios from 'axios';
import { useEffect, useState } from 'react';
import "../App.css"

const URL = "https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json";

const Productlist = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    async function Getlist() {
        let res = await axios.get(URL);
        let arr = [];
        if (res.data) {
            for (let key in res.data) {
                arr.push({ id: key, ...res.data[key] });
            }
            setData(arr);
            setFilteredData(arr);
        }
    }

    useEffect(() => {
        Getlist();
    }, []);

    // searching
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = data.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.desc.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };

    // sorting
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);
        let sorted = [...filteredData];

        if (option === 'priceAsc') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (option === 'priceDesc') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (option === 'nameAsc') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'nameDesc') {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        }

        setFilteredData(sorted);
    };

    //filtering 
    const handleFilter = (e) => {
        const category = e.target.value;
        if (category === 'all') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(product => product.category === category);
            setFilteredData(filtered);
        }
    };

    return (
        <div className='mainpcard'>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search products...'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className='sort-options'>
                <select value={sortOption} onChange={handleSort}>
                    <option value=''>Sort By</option>
                    <option value='priceAsc'>Price: Low to High</option>
                    <option value='priceDesc'>Price: High to Low</option>
                    <option value='nameAsc'>Name: A to Z</option>
                    <option value='nameDesc'>Name: Z to A</option>
                </select>
            </div>

            <div className='filter-options'>
                <select onChange={handleFilter}>
                    <option value='all'>All Categories</option>
                    <option value='fruits'>Fruits</option>
                    <option value='vegetables'>Vegetables</option>
                    <option value='dairy'>Dairy</option>
                </select>
            </div>

            {filteredData.map((product) => (
                <div key={product.id} className='productcard'>
                    <div><img src={product.img} alt={product.name} /></div>
                    <div className='middesc'>
                        <h1>{product.name}</h1>
                        <h3>{product.desc}</h3>
                        <h2>RS: {product.price}</h2>
                    </div>

                    <div className='upbutton'>
                        <button>Update</button>
                        <button>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productlist;
