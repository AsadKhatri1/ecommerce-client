import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${search}`);
    setSearch("");
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
            <button className="btn btn-warning mx-2">Cart</button>
            <button className="btn btn-warning mx-2">Profile</button>
            <button className="btn btn-warning mx-2">Login</button>
            <button className="btn btn-warning mx-2">Register</button>
            <button className="btn btn-warning mx-2">Logout</button>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
