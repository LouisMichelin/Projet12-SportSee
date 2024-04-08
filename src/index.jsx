import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./pages/App.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<App />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
