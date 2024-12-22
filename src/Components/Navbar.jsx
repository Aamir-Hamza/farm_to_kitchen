import "../App.css"
import { Link } from "react-router-dom"
import './Navbar.css'
export function Navbar(){
    return (<>
    <div className="containerNav">
         <img className="img" src="https://as1.ftcdn.net/v2/jpg/09/57/85/46/1000_F_957854646_zvLI7pkE2rsQGZM3VlCRgoLEp3bU1yWI.jpg" alt="" />
        <Link to={"/"}>Home</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/products"}>Product</Link>
       
        
        
        <Link to={"/login"}>Login</Link>
        <Link to={"/about"}>About Us</Link>



    </div>
    
    </>)
}