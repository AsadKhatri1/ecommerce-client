import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { cart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

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

  return (
    <div>
      {cart?.items?.map((product) => (
        <div
          key={product._id}
          className="container bg-dark my-5 p-3 text-center"
        >
          <div className="d-flex align-items-center justify-content-around">
            <div className="cart_img">
              <img
                src={product.imgSrc}
                alt="Image cart"
                style={{ width: "100px", height: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="cart_desc text-white">
              <h2>{product.title}</h2>
              <h4>{product.price}</h4>
              <h5>QTY: {product.qty}</h5>
            </div>
            <div className="cart_action">
              <button className="btn btn-primary mx-1">QTY +</button>
              <button className="btn btn-warning mx-1">QTY -</button>
              <button className="btn btn-danger mx-1">REMOVE</button>
            </div>
          </div>
        </div>
      ))}
      <div className="container text-center">
        <button className="btn btn-success mx-2">Total Items: {qty}</button>
        <button className="btn btn-primary mx-2">
          Total Price: Rs.{" "}
          <span className="fw-bold" style={{ fontWeight: "bold" }}>
            {price}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
