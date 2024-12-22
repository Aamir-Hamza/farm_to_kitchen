import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

export function Navbar({ user, handleLogout }) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout(); // Clear session or state
        navigate("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar">
            <div >
                {/* Logo */}
                <div >
                    <img
                        
                        src="https://as1.ftcdn.net/v2/jpg/09/57/85/46/1000_F_957854646_zvLI7pkE2rsQGZM3VlCRgoLEp3bU1yWI.jpg"
                        alt="Logo"
                    />
                    <span >AgriMarket</span>
                </div>

                {/* Navigation Links */}
                <div >
                    <Link to="/" className="hover:text-yellow-300">
                        Home
                    </Link>
                    {user && user.role === 'farmer' && (
                        <Link to="/add" className="hover:text-yellow-300">
                            Add Product
                        </Link>
                    )}
                    <Link to="/products" className="hover:text-yellow-300">
                        Products
                    </Link>
                    <Link to="/about" className="hover:text-yellow-300">
                        About Us
                    </Link>
                </div>

                {/* Login/Logout Button */}
                <div >
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
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex justify-around py-3 border-t border-white">
                <Link to="/" className="hover:text-yellow-300">
                    Home
                </Link>
                {user && user.role === 'farmer' && (
                    <Link to="/add" className="hover:text-yellow-300">
                        Add
                    </Link>
                )}
                <Link to="/products" className="hover:text-yellow-300">
                    Products
                </Link>
                <Link to="/about" className="hover:text-yellow-300">
                    About
                </Link>
            </div>
        </nav>
    );
}
