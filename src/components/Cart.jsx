import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { cart, decreaseQty, addToCart, removeProduct } =
    useContext(AppContext);
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
              <h5>{product.price}</h5>
              <h6>QTY: {product.qty}</h6>
            </div>
            <div className="cart_action">
              <button
                className="btn btn-primary mx-1"
                onClick={() =>
                  addToCart(
                    product?.productId,
                    product.title,
                    1,
                    product.price / product.qty,
                    product.imgSrc
                  )
                }
              >
                +
              </button>
              <button
                className="btn btn-warning mx-1"
                onClick={() => decreaseQty(product?.productId, 1)}
              >
                -
              </button>
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
      <div className="container text-center my-3">
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
