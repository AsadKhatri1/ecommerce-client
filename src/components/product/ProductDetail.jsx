import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const url = "http://localhost:1000/api";

  //   fetching single product
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: { "Content-Type": "Application/json" },
        withCredentials: true,
      });

      //   setProduct(api.data.products);

      setProduct(api.data.product);
      console.log(product);
    };
    fetchProducts();
  }, [id]);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="row container">
          <div className="left col-md-4">
            <img
              src={product.imgSrc}
              alt=""
              style={{
                width: "250px",
                height: "250px",
                border: "1px solid yellow",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="left col-md-8 text-center d-flex align-items-center flex-column justify-content-center">
            <h1>{product?.title}</h1>
            <p>{product?.category}</p>
            <h6>{product?.description}</h6>
            <h1>Rs. {product?.price}</h1>

            <div>
              <button
                className="btn btn-primary mx-1"
                style={{ fontWeight: "bold" }}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-warning mx-1"
                style={{ fontWeight: "bold" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <RelatedProduct category={product?.category} id={product?._id} />
      </div>
    </>
  );
};

export default ProductDetail;
