import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/Projectdetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="/project/:id" Component={ProjectDetails}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
