import "../App.css";
import { Link } from "react-router-dom";

export function Navbar({ user, handleLogout }) {
  return (
    <div className="containerNav flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
      <div className="flex items-center">
        <img
          className="img w-12 h-12 rounded-full mr-4"
          src="https://as1.ftcdn.net/v2/jpg/09/57/85/46/1000_F_957854646_zvLI7pkE2rsQGZM3VlCRgoLEp3bU1yWI.jpg"
          alt="logo"
        />
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">Home</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/add" className="hover:text-gray-400">Add</Link>
        <Link to="/products" className="hover:text-gray-400">Products</Link>
        <div className="relative">
          <input
            className="inputsearch p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            placeholder="Search"
          />
          <img
            className="absolute top-2 right-2 w-6 h-6"
            src="https://img.icons8.com/?size=100&id=72704&format=png&color=000000"
            alt="search icon"
          />
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        )}
        <Link to="/about" className="hover:text-gray-400">About Us</Link>
      </div>
    </div>
  );
}
