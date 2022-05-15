//import "./App.css";
import Page from "./pages/Page";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";

import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Category />
      <Page />
    </BrowserRouter>
  );
}

export default App;
