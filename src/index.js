import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={"/coin"}>
    <React.StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
