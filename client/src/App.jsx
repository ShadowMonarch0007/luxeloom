import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();
  const hideNavFooterPages = ['/login'];
  const containerClasses = hideNavFooterPages.includes(location.pathname) ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]';

  return (
    <div className={containerClasses}>
      <ToastContainer />
      {!hideNavFooterPages.includes(location.pathname) && <Navbar />}
      {!hideNavFooterPages.includes(location.pathname) && <SearchBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {!hideNavFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
