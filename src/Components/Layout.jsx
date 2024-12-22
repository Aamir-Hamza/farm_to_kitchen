import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CartTab from './CartTab';
import { useSelector } from 'react-redux';
// import './Layout'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);

    return (
        <div className="bg-zinc-200 min-h-screen flex flex-col">
            <Header />
            <main className={`w-full max-w-screen-xl mx-auto p-5 transform transition-transform duration-500 ${statusTabCart === false ? "" : "-translate-x-56"}`}>
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
};

export default Layout;