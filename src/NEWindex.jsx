import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./pages/App.jsx";
import Header from "./components/Header/Header.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Header />
      <App />
   </React.StrictMode>
);
