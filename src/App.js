import "./App.css";
import React from "react";
import NavbarComp from "./components/NavbarComp";
import UploadFile from "./components/UploadFile";
import ParsedFile from "./components/ParsedFile";

function App() {
  return (
    <div className="app">
      <NavbarComp />
      <UploadFile />
      <ParsedFile />
    </div>
  );
}

export default App;
