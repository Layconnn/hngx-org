import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Gallery from "../pages/gallery";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
