import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { login, token } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      setFormData({
        email: "",
        password: "",
      });
      localStorage.setItem("token", result.token);

      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/");
    } else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div
      className="container my-5 d-flex flex-column align-items-center justify-content-center "
      style={{ width: "60%", height: "80vh" }}
    >
      <h1 className="text-center text-dark mb-5">LOGIN</h1>
      <form
        onSubmit={onSubmitHandler}
        className="w-100 p-4"
        style={{ border: "2px solid #cfb600", borderRadius: "10px" }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={formData.email}
            onChange={onChangeHandler}
            name="email"
            type="email"
            className="form-control form-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={formData.password}
            onChange={onChangeHandler}
            name="password"
            type="password"
            className="form-control form-input"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-50">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
