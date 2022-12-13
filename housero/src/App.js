import './App.css';
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Criteria from './components/Criteria';
import './all.css'


function App() {

  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
