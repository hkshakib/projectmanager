import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./Config/FbConfig";
import { initializeApp } from "firebase/app";

import ProjectDetails from "./Components/Projects/Projectdetails";
import CreateProject from "./Components/Projects/CreateProject";
import Dashboard from "./Components/Dashboard/Dashboard";
import { saveUser } from "./Store/Reducers/AuthReducer";
import MiniDrawer from "./Components/Layout/MiniDrawer";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Layout/Navbar";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#f2f4f8"
    }
  }
});


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
    <ThemeProvider theme={themeLight}>
    <CssBaseline />
    <BrowserRouter>
      <Navbar/>
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
    </ThemeProvider>
  );
};

export default App;
