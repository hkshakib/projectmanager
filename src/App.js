import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/Projectdetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreateProject from "./Components/Projects/CreateProject";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config/FbConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./Store/Reducers/AuthReducer";

const App = () => {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

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
