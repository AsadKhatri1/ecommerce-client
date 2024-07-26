import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="nav sticky-top">
        <div className="nav_bar py-2 bg-dark sticky-top">
          <Link to={"/"} className="left" style={{ textDecoration: "none" }}>
            <h3 className="text-white">E-Commerce</h3>
          </Link>
          <div className="search_bar">
            <IoSearchOutline className="mx-2" />{" "}
            <input type="text" placeholder="Search..." />
          </div>
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
