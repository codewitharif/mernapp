import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Success from "./Success";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://mernapp-backend.vercel.app/login",
        loginData
      );

      const { success, message } = response.data;

      if (success) {
        console.log("login request sent....");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("login error", error);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
          onChange={handleLoginChange}
          value={loginData.username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          onChange={handleLoginChange}
          value={loginData.password}
        />

        <br />

        <button type="submit">Login</button>
        <p>
          Not Registered yet? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
