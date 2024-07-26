import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShowProducts from "./components/product/ShowProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/user/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowProducts></ShowProducts>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
