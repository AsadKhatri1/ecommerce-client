import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Address from "./components/Address";
import SearchedProduct from "./components/product/SearchedProduct";
import Register from "./components/user/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ShowProducts></ShowProducts>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/address" element={<Address></Address>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route
            path="/product/search/:term"
            element={<SearchedProduct></SearchedProduct>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
