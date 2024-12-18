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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
     {/* <User_Registration/> */}
    </>
  )
}

export default App
