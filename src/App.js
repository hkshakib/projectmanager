import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App"></div>
    </BrowserRouter>
  );
};

export default App;
