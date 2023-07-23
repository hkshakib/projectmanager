import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/Projectdetails";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import CreateProject from "./Components/Projects/CreateProject";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config/FbConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { saveUser } from "./Store/Reducers/AuthReducer";
import { getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import Layout from "./Components/Layout/Layout";
import MiniDrawer from "./Components/Layout/MiniDrawer";

const app = initializeApp(firebaseConfig);
export const DataBase = getFirestore(app); 
const App = () => {
  const auth = getAuth();

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
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="/project/:id" Component={ProjectDetails}/>
        <Route path="/signin" Component={SignIn}/>
        <Route path="/signup" Component={SignUp}/>
        <Route path="/create" Component={CreateProject}/>
        <Route path="/drawer" Component={MiniDrawer}/>
        <Route path="/layout" Component={Layout}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
