import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./pages/App.jsx";
import Header from "./components/Header/Header.jsx";
import Error from "./pages/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/:id" element={<App />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
