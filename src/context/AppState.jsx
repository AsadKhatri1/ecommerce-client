import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
const AppState = (props) => {
  const url = "http://localhost:1000/api";

  const [products, setProducts] = useState([]);

  //   fetching all products as data value to context
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/products`, {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      });

      setProducts(api.data.products);
      console.log(products);
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
