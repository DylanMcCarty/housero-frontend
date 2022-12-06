import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "./context/GlobalState";
import AuthService from "./services/auth.service";
import Logo from "./Assets/Logo.png";

export default function Navbar() {
  const [state, dispatch] = useGlobalState();

  function Logout() {
    AuthService.logout();
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand d-flex align-items-center">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item me-2 active rounded shadow-lg">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {!state.currentUser && (
            <li className="nav-item d-flex align-items-center px-3 me-2">
              <Link to="/login">Log in</Link>
            </li>
          )}
          {!state.currentUser && (
            <li className="nav-item d-flex align-items-center px-3 me-2">
              <Link to="/register">Register</Link>
            </li>
          )}
          {state.currentUser && (
            <li className="nav-item d-flex align-items-center px-3 me-2">
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {state.currentUser && (
            <li className="nav-item d-flex align-items-center px-3 me-2">
              <Link
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
