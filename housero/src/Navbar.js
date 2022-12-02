import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalState } from "./context/GlobalState";
import AuthService from './services/auth.service'
import Logo from './Assets/Logo.png'

export default function Navbar() {
  const [ state, dispatch ] = useGlobalState();
 
  function Logout () {
    AuthService.logout();
    window.location.reload()
  }


  return (
    <div className='container' style={{height: '120px'}}>
      <div className='row h-100 justify-contents-left'>
        <nav>
          <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
            <li>
              <Link to="/"><img src={Logo}/></Link>
            </li>
            {
              !state.currentUser && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )
            }
            {
              !state.currentUser && (
                <li>
                  <Link to="/register">Register</Link>
                </li>
              )
            }
            {
              state.currentUser && (
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              )
            }
            {
              state.currentUser && (
                <li>
                  <Link onClick={() => {Logout()}}>Logout</Link>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}
