import React, { useState } from "react";
import "../../Common.css";
import "./Register.css";
import { ConstantString } from "../../Constant-String";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = ConstantString.emailRegex;
    if (!values.fname) {
      error.fname = ConstantString.fnameRequiredErr;
    }
    if (!values.lname) {
      error.lname = ConstantString.lnameRequiredErr;
    }
    if (!values.email) {
      error.email = ConstantString.emialRequiredErr;
    } else if (!regex.test(values.email)) {
      error.email = ConstantString.vaildEmailErr;
    }
    if (!values.password) {
      error.password = ConstantString.PasswordRequiredErr;
    } else if (values.password.length < 4) {
      error.password = ConstantString.passwordMinLenErr;
    } else if (values.password.length > 10) {
      error.password = ConstantString.passwordMaxLenErr;
    }
    if (!values.cpassword) {
      error.cpassword = ConstantString.ConfirmPasswordRequiredErr;
    } else if (values.cpassword !== values.password) {
      error.cpassword = ConstantString.ConfirmPassShouldSameErr;
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    doRegister();
  };
  const doRegister = () => {
    if (user.cpassword && user.email && user.fname && user.password) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(console.log);
      navigate("/Login");
    }
  };

  return (
    <>
      <div className="register">
        <form>
          <h1>Create your account</h1>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname}
          />
          <p className="error">{formErrors.fname}</p>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname}
          />
          <p className="error">{formErrors.lname}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
          <p className="error">{formErrors.email}</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
          <p className="error">{formErrors.password}</p>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className="error">{formErrors.cpassword}</p>
          <button className="button_common" onClick={signupHandler}>
            Register
          </button>
        </form>
        <Link to="/Login">Already registered? Login</Link>
      </div>
    </>
  );
};
export default Register;
