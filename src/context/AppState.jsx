import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
const AppState = (props) => {
  const url = "https://ecommerce-2ijh.onrender.com/api";

  const [products, setProducts] = useState([]);

  //   fetching all products as data value to context
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/products`, {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      });

      setProducts(api.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
