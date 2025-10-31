import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 This base path is VERY IMPORTANT */}
    <BrowserRouter basename="/builer-wesite">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
