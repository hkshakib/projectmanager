import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/Projectdetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreateProject from "./Components/Projects/CreateProject";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="/project/:id" Component={ProjectDetails}/>
        <Route path="/signin" Component={SignIn}/>
        <Route path="/signup" Component={SignUp}/>
        <Route path="/create" Component={CreateProject}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
