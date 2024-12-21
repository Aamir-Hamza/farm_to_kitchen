import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import { User_Registration } from './Components/User_Registration'
import{Navbar} from "./Components/Navbar"

import Login from './Components/Login'
import Product from './Components/Product'

import Detail from './pages/Detail'
import { Home } from './pages/Home'
import Layout from './Components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
     {/* <User_Registration/> */}
    </>
  )
}

export default App
