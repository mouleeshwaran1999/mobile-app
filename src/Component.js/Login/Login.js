import React, { useState } from "react";
import "../../Common.css";
import "./Login.css";
import { ConstantString } from "../../Constant-String";
import { Link, useNavigate } from "react-router-dom";
const Login = ({ setUserState }) => {
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  var error = {};
  const validateForm = (user) => {
    console.log(user);
    const regex = ConstantString.emailRegex;
    if (!user.email) {
      // setFormErrors({
      //   ...formErrors,
      //   email: ConstantString.vaildEmailErr,
      //   password: ConstantString.PasswordRequiredErr,
      // });
      setFormErrors((e) => {
        return { ...e, email: ConstantString.emialRequiredErr };
      });
      error.email = ConstantString.emialRequiredErr;
    } else if (!regex.test(user.email)) {
      setFormErrors((e) => {
        return { ...e, password: error.email };
      });
      error.email = ConstantString.vaildEmailErr;
    }
    if (!user.password) {
      error.password = ConstantString.PasswordRequiredErr;
      setFormErrors((e) => {
        return { ...e, password: error.password };
      });
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    validateForm(user);
    doLogin();
  };
  console.log(formErrors);
  const doLogin = () => {
    if (!error.email || !error.password) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      })
        .then((res) => res.json())
        .then(function (res) {
          if (res.token) {
            console.log(res);
            navigate("/Home", { replace: true });
          }
        })

        .then(console.log);
    }
  };

  return (
    <div className="login">
      <form>
        <h1>Login</h1>
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
        <button className="button_common" onClick={loginHandler}>
          Login
        </button>
      </form>
      <Link to="/Register">Not yet registered? Register Now</Link>
    </div>
  );
};
export default Login;
