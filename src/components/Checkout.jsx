import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, removeProduct, userAddress } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;

    if (cart?.items) {
      for (let i = 0; i < cart.items.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [cart]);
  console.log("Address", userAddress);
  return (
    <>
      <div
        className="container my-3 p-3"
        style={{
          // border: "1px solid gray",
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h2 className="mt-4 text-center">ORDER SUMMARY</h2>
        <div className="row">
          <div className="col-md-8">
            {cart?.items?.map((product) => (
              <div
                key={product._id}
                className="container bg-light my-5 p-1 text-center"
                style={{
                  borderRadius: "8px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <div className="d-flex align-items-center justify-content-around">
                  <div className="cart_img">
                    <img
                      src={product.imgSrc}
                      alt="Image cart"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "8px",
                        border: "2px solid yellow",
                      }}
                    />
                  </div>
                  <div className="cart_desc text-dark">
                    <h3>{product.title}</h3>
                  </div>
                  <div className="cart_action">
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => {
                        if (confirm("Are you sure you want to remove?")) {
                          removeProduct(product?.productId);
                        }
                      }}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {cart.items.length > 0 && (
              <div className="container text-center my-3">
                <button className="btn btn-success mx-2">
                  Total Items: {qty}
                </button>
                <button className="btn btn-primary mx-2">
                  Total Price: Rs.{" "}
                  <span className="fw-bold" style={{ fontWeight: "bold" }}>
                    {price}
                  </span>
                </button>
              </div>
            )}
          </div>
          <div className="col-md-4 my-2">
            <h3 className="text-center mb-4">Shipping Address</h3>
            <ul style={{ fontWeight: "bold" }}>
              <li>Name: {userAddress.fullname}</li>
              <li>Country: {userAddress.country} </li>
              <li>City: {userAddress.city} </li>
              <li>State: {userAddress.state} </li>
              <li>Phone: {userAddress.phoneNumber}</li>
              <li>PinCode: {userAddress.pincode}</li>
              <li>Address: {userAddress.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <button className="btn btn-lg btn-success">PROCEED</button>
      </div>
    </>
  );
};

export default Checkout;
