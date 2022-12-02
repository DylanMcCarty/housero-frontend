import './App.css';
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import Navbar from './Navbar';


function App() {

  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
