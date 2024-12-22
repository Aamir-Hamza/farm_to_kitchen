


import './App.css'
import { useState } from 'react'


import {Routes,Route, Navigate} from "react-router-dom"

import { User_Registration } from './Components/User_Registration'
import{Navbar} from "./Components/Navbar"
import {Home} from "./Components/Home"
import {Login} from './Components/Login'
import Product from './Components/Product'



import Addproducts from './Components/Addproducts'
import Productlist from './Components/Productlist'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  const [user, setUser] = useState(null); // Store logged-in user info
  const [registeredUsers, setRegisteredUsers] = useState([]); // Store registered users

  // Handle user registration
  const handleRegister = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };

  // Handle user login
  const handleLogin = (email, password) => {
    const foundUser = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  // Handle user logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>

   
    

      <Navbar user={user} handleLogout={handleLogout} />
       <Routes>
         <Route path="/" element={<Home user={user} />} />
         <Route path="/products" element={user ? <Productlist /> : <Navigate to="/" />} />
         <Route path="/login" element={<Login onLogin={handleLogin} />} />
         <Route path="/register" element={<User_Registration onRegister={handleRegister} />} />
         <Route path='/add' element={<Addproducts/>}/>
         <Route path='/about' element={<About/>}/>
       </Routes> 
<Footer/>

   
    </>
  );
}

export default App;
