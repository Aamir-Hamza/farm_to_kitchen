import React from 'react';
import Productlist from './Productlist';
// import Productlist from './Productlist';

const FarmerPage = () => {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold">Welcome to your Farmer Dashboard</h2>
            <Productlist /> {/* Render Productlist component */}
        </div>
    );
};

export default FarmerPage;