import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mernapi-fawn.vercel.app/register",
        registrationData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Register page</h1>

      <form onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
          onChange={handleRegistrationChange}
          value={registrationData.username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
          onChange={handleRegistrationChange}
          value={registrationData.password}
        />

        <br />

        <button type="submit">Register</button>
        <p>
          Already Registered? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
