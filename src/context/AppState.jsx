import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
const AppState = (props) => {
  const url = "https://ecommerce-2ijh.onrender.com/api";

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [user, setUser] = useState();

  //   fetching all products as data value to context
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/products`, {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      });

      setProducts(api.data.products);
      setFilterData(api.data.products);
    };
    userProfile();
    fetchProducts();
  }, [token]);

  // user registeration

  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      }
    );
    return api.data;
  };

  // user login

  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      { email, password },
      {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      }
    );
    setToken(api.data.token);
    setIsAuthenticated(true);
    console.log(token);
    return api.data;
  };

  // getting token from localstorage

  useEffect(() => {
    const lstoken = localStorage.getItem("token");
    if (lstoken) {
      setToken(lstoken);
      setIsAuthenticated(true);
    }
  }, []);

  // user logout

  const logout = () => {
    setToken("");
    toast.success("Loggedout succesfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // user profile

  const userProfile = async () => {
    const api = await axios.get(`${url}/user/profile`, {
      headers: { "Content-Type": "Application/json", Auth: token },
      withCredentials: true,
    });

    // console.log(api.data);
    setUser(api.data.user);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        register,
        login,
        url,
        isAuthenticated,
        setIsAuthenticated,
        token,
        filterData,
        setFilterData,
        logout,
        user,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
