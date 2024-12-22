import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

// Logo Component
const Logo = () => {
    return (
        <div className="logo">
            <img
                src="https://as1.ftcdn.net/v2/jpg/09/57/85/46/1000_F_957854646_zvLI7pkE2rsQGZM3VlCRgoLEp3bU1yWI.jpg"
                alt="Logo"
                className="logo-img"
            />
            <span className="logo-name">AgriMarket</span>
        </div>
    );
};

// NavLinks Component
const NavLinks = ({ user }) => {
    return (
        <div className="nav-links">
            <Link to="/" className="hover:text-yellow-300">
                Home
            </Link>
            
                <Link to="/add" className="hover:text-yellow-300">
                    Add Product
                </Link>
            
            <Link to="/products" className="hover:text-yellow-300">
                Products
            </Link>
            <Link to="/about" className="hover:text-yellow-300">
                About Us
            </Link>
        </div>
    );
};

// AuthButton Component
const AuthButton = ({ user, handleLogout }) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout(); // Clear session or state
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="auth-button">
            {user ? (
                <button
                    onClick={handleLogoutClick}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Logout
                </button>
            ) : (
                <Link
                    to="/login"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Login
                </Link>
            )}
        </div>
    );
};

// MobileMenu Component
const MobileMenu = ({ user }) => {
    return (
        <div className="md:hidden flex justify-around py-3 border-t border-white">
            <Link to="/" className="hover:text-yellow-300">
                Home
            </Link>
            
                <Link to="/add" className="hover:text-yellow-300">
                    Add
                </Link>
                
        
            <Link to="/products" className="hover:text-yellow-300">
                Products
            </Link>
            <Link to="/about" className="hover:text-yellow-300">
                About
            </Link>
        </div>
    );
};

// Main Navbar Component
export function Navbar({ user, handleLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Logo />

                

                {/* Navigation Links */}
                <NavLinks user={user} />
                {/* Login/Logout Button */}
                <AuthButton user={user} handleLogout={handleLogout} />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'open' : ''}`}>
                <MobileMenu user={user} />
            </div>
        </nav>
    );
}
