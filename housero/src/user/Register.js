import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { toast, Toaster } from "react-hot-toast";

export default function Register() {

  const sucessNotify = () => toast.success("Account Succesfully Created!");
  const errorNotify = () => toast.error("Username Already Exists");

  const [resp, setResp] = useState([])
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };


  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user).then(Navigate("/login"))
  }

  

  return (
    <div className="container">
      <div className="c-form row d-flex text-center border border-2 border-black rounded py-5">
        <form onSubmit={handleRegister}>
          <div className="pb-2">
            <label className="pe-1" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => handleChange("username", e.target.value)}
              required
            />
          </div>
          <div className="pb-2">
            <label className="pe-1" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="pb-2">
            <label className="pe-1" htmlFor="pass">
              Password (8 characters minimum):
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <div className="pb-2">
            <label className="pe-1" htmlFor="passConf">
              Confirm Password:
            </label>
            <input
              type="password"
              id="passConf"
              name="password"
              minLength="8"
              required
              onChange={(e) => handleChange("passwordConf", e.target.value)}
            />
          </div>
          <div className="pb-2">
            <label className="pe-1" htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="fname"
              required
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="pb-2">
            <label className="pe-1" htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lname"
              required
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Register"
            disabled={
              user.password &&
              user.password.length >= 8 &&
              user.password === user.passwordConf &&
              user.firstName &&
              user.lastName &&
              user.email
                ? false
                : true
            }
          />
        </form>
            

      </div>
    </div>
  );
}
