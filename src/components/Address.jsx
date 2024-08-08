import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Address = () => {
  const { register, addAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    number: "",
    address: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { fullname, country, state, city, pincode, number, address } = formData;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await addAddress(
      fullname,
      address,
      city,
      country,
      pincode,
      number,
      state
    );
    if (result.success) {
      setFormData({
        fullname: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        number: "",
        address: "",
      });
      navigate("/checkout");
    }
  };

  return (
    <div
      className="container my-5 d-flex flex-column align-items-center justify-content-center "
      style={{ height: "80vh" }}
    >
      <h1 className="text-center text-dark mb-5">ADD ADDRESS</h1>
      <form
        onSubmit={onSubmitHandler}
        className="w-100 p-4"
        style={{ border: "2px solid #cfb600", borderRadius: "10px" }}
      >
        {/* 1st row */}
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              value={formData.fullname}
              onChange={onChangeHandler}
              name="fullname"
              type="text"
              className="form-control form-input"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">Country</label>
            <input
              value={formData.country}
              onChange={onChangeHandler}
              name="country"
              type="text"
              className="form-control form-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputPassword1">State</label>
            <input
              value={formData.state}
              onChange={onChangeHandler}
              name="state"
              type="text"
              className="form-control form-input"
              id="exampleInputPassword1"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">City</label>
            <input
              value={formData.city}
              onChange={onChangeHandler}
              name="city"
              type="text"
              className="form-control form-input"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputEmail1">Pin Code</label>
            <input
              value={formData.pincode}
              onChange={onChangeHandler}
              name="pincode"
              type="text"
              className="form-control form-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="exampleInputPassword1"> Phone Number</label>
            <input
              value={formData.number}
              onChange={onChangeHandler}
              name="number"
              type="text"
              className="form-control form-input"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              value={formData.address}
              onChange={onChangeHandler}
              name="address"
              type="text"
              className="form-control form-input"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success w-50">
            Add
          </button>
        </div>
      </form>
      {userAddress && (
        <div className="d-grid my-3">
          <button
            className="btn btn-warning "
            onClick={() => navigate("/checkout")}
          >
            Use Existing Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
