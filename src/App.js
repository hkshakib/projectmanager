import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
