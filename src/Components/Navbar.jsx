import { Link } from "react-router-dom";
import "../App.css";

export function Navbar({ user, handleLogout }) {
  return (
    <div className="containerNav">
         <img className="img" src="https://as1.ftcdn.net/v2/jpg/09/57/85/46/1000_F_957854646_zvLI7pkE2rsQGZM3VlCRgoLEp3bU1yWI.jpg" alt="" />
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Product</Link>
        <input className="inputsearch" type="text" placeholder="Search " />
        <Link to={"/login"}>Login</Link>



    </div>
  );
}
