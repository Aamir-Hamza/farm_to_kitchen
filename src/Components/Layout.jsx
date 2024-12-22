import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';  // Import the Navbar component
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);

    return (
        <div className="bg-zinc-200 min-h-screen flex flex-col">
            {/* Navbar is included at the top */}
            <Navbar />

            {/* Main content area */}
            <main className={`w-full max-w-screen-xl mx-auto p-5 transform transition-transform duration-500 
            ${statusTabCart === false ? "" : "-translate-x-56"}`}>
                <Header />
                {/* Outlet renders the child routes */}
                <Outlet />
            </main>

            {/* CartTab slides in/out based on the Redux state */}
            <CartTab />
        </div>
    );
};

export default Layout;
