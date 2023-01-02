import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import "./style.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/:id" element={<Detail/>}/>

       
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
