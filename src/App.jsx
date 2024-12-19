import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import { User_Registration } from './Components/User_Registration'
import{Navbar} from "./Components/Navbar"
import {Home} from "./Components/Home"
import Login from './Components/Login'
import Product from './Components/Product'

import Addproducts from './Components/Addproducts'
import Productlist from './Components/Productlist'
import About from './Components/About'


function App() {
  

  return (
    <>
    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Addproducts/>}/>
      <Route path="/products" element={<Productlist/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
     {/* <User_Registration/> */}
    </>
  )
}

export default App
