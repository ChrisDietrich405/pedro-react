import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/:details" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
