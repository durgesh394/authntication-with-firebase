import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProviver from "./app/modules/auth/context/authProviver";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviver>
    <App />
  </AuthProviver>
);
