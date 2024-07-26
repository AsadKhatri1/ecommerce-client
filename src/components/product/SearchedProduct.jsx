import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";

const SearchedProduct = () => {
  const { products } = useContext(AppContext);
  const { term } = useParams();
  const searched = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
    );
  });

  return (
    <>
      <h1 className="text-center mt-5">Searched products</h1>
      <div className=" container d-flex align-items-center justify-content-center my-5">
        <div className="row container d-flex align-items-center justify-content-center">
          {searched.length < 1 ? (
            <h3 className="my-5 text-danger">No Items Matches Your Search</h3>
          ) : (
            <></>
          )}
          {searched?.map((product) => {
            return (
              <div
                key={product._id}
                className=" my-3 col-md-4 d-flex align-items-center justify-content-center "
              >
                <div
                  className="card bg-dark text-light text-center p-3"
                  style={{ width: "18rem" }}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <Link to={`/product/${product._id}`}>
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
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
                      <button className="btn btn-warning mx-1">
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

export default SearchedProduct;
