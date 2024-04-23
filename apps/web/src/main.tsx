import React from "react";
import ReactDOM from "react-dom/client";
import "./../public/styles/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>main</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
