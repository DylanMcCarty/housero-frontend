import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);
      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
      navigate("/");
    });
  };

  return (
    <div className="container mt-5" style={{ height: "500px" }}>
      <div className="container">
        <div className="row c-form d-flex text-center border border-2 border-black rounded py-5">
          <form className="" onSubmit={handleLogin}>
            <div className="pb-2">
              <label className="pe-1" htmlFor="username">
                Username:{" "}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="pb-2">
              <label className="pe-1" htmlFor="pass">
                Password:{" "}
              </label>
              <input
                type="password"
                id="pass"
                name="password"
                minLength="8"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Sign in" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
