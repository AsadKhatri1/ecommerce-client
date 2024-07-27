import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const { products, filterData, setFilterData, logout, isAuthenticated } =
    useContext(AppContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${search}`);
    setSearch("");
  };
  // filter by category
  const filterByCategory = (cat) => {
    setFilterData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };
  return (
    <div>
      <div className="nav sticky-top">
        <div className="nav_bar py-2 bg-dark sticky-top">
          <Link to={"/"} className="left" style={{ textDecoration: "none" }}>
            <h3 className="text-white">E-Commerce</h3>
          </Link>
          <form className="search_bar" onSubmit={submitHandler}>
            <IoSearchOutline className="mx-2" onClick={submitHandler} />{" "}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="right">
            {isAuthenticated && (
              <>
                <button className="btn btn-primary mx-2">Cart</button>
                <Link to="/profile" className="btn btn-info mx-2">
                  Profile
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    logout(), navigate("/login");
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Link to="/login" className="btn btn-light mx-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-warning mx-2">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {location.pathname == "/" && (
          <div className="sub_bar bg-primary text-white">
            <div className="items" onClick={() => setFilterData(products)}>
              All
            </div>
            <div className="items" onClick={() => filterByCategory("suv")}>
              SUVs
            </div>
            <div className="items" onClick={() => filterByCategory("sedan")}>
              Sedan
            </div>
            <div
              className="items"
              onClick={() => filterByCategory("hatchback")}
            >
              Hatchback
            </div>
            <div className="items" onClick={() => filterByCategory("4x4")}>
              4x4
            </div>
            <div
              className="items"
              onClick={() => filterByCategory("motorbike")}
            >
              MotorBikes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
