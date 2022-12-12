import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useGlobalState } from "./context/GlobalState";
import AuthService from "./services/auth.service";
import Logo from "./Assets/Logo.png";

export default function Navbar() {
  const [state, dispatch] = useGlobalState();

  function Logout() {
    AuthService.logout().then(Navigate('/home'))
  }

  return (
    <nav className="navbar navbar-expand d-flex align-items-center">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item me-2 active rounded shadow-lg">
            <Link to="/home">
              <img src={Logo} />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {!state.currentUser && (
            <li className="btn btn-primary d-flex align-items-center px-3 me-2">
              <Link className="text-decoration-none text-white" to="/login">Log in</Link>
            </li>
          )}
          {!state.currentUser && (
            <li className="btn btn-primary d-flex align-items-center px-3 me-2">
              <Link className="text-decoration-none text-white" to="/register">Register</Link>
            </li>
          )}
          {state.currentUser && (
            <li className="btn bg-primary d-flex align-items-center px-3 me-2">
              <Link className="text-white text-decoration-none" to="/propertysearch">Property Search</Link>
            </li>
          )}
          {state.currentUser && (
            <li className="nav-item d-flex align-items-center px-3 me-2">
              <Link to='/home' className="text-decoration-none "
                onClick={() => {
                  Logout();
                }}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
