import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./pages/App.jsx";
import Header from "./components/Header/Header.jsx";
///////////////////////////////////////////////////////
import { createBrowserRouter, RouterProvider } from "react-router-dom";
///////////////////////////////////////////////////////

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/:id",
      element: <App />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Header />
      {/* <Router>
         <Header />
         <Routes>
            <Route index path="/:id" element={<App />} />
            <Route index path="/:id" element={<App />} />
            <Route path="*" element={<Navigate to="/:id" replace />} />
            <Route path="*" element={<Error />} />
            <Route index element={<Navigate to="/:id" />} />
            <Route path="/" element={<Navigate to="/12" />} />
            <Route path="/12" element={<App />} />
         </Routes>
      </Router> */}
      <RouterProvider router={router} />
   </React.StrictMode>
);
