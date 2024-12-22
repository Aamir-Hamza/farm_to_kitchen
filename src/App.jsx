
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { User_Registration } from './Components/User_Registration';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
// import FarmerPage from './farmer/FarmerPage';
// import Productlist from './farmer/Productlist';
// import Addproducts from './farmer/Addproducts';
import About from './Components/About';
import Footer from './Components/Footer';
// import Layout from './customer/Layout';
// import CHome from './customer/CHome';
// import Detail from './customer/Detail';
import FarmerPage from './Components/FarmerPage';
import Productlist from './Components/Productlist';
import Layout from './Components/Layout';
import { CHome } from './pages/CHome';
import Detail from './pages/Detail';
import Addproducts from './Components/Addproducts'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<User_Registration />} />
        
        {/* Customer Routes */}
        <Route path="/customer" element={<Layout />}>
          <Route index element={<CHome />} />
          <Route path="product/:id" element={<Detail />} />
        </Route>

        {/* Farmer Routes */}
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/add" element={<Addproducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

