import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
const ShowProducts = () => {
  const [loading, setLoading] = useState(true);
  const { products, filterData, addToCart } = useContext(AppContext);

  return (
    <>
      <div className=" container d-flex align-items-center justify-content-center my-4">
        <div className="row container d-flex align-items-center justify-content-center">
          {filterData?.map((product) => {
            return (
              <div
                key={product._id}
                className=" my-3 col-md-4 d-flex align-items-center justify-content-center "
              >
                <div
                  className="card bg-light text-dark my-5 p-1 text-center"
                  style={{
                    borderRadius: "8px",
                    width: "18rem",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.imgSrc}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "12px",
                          border: "2px solid yellow",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>

                    <div className="mt-3">
                      <button className="btn btn-primary mx-1">
                        Rs. {product.price}
                      </button>
                      <button
                        className="btn btn-warning mx-1"
                        onClick={() =>
                          addToCart(
                            product._id,
                            product.title,
                            1,
                            product.price,
                            product.imgSrc
                          )
                        }
                      >
                        Add To cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
