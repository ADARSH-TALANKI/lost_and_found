import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";
import Lost from "./pages/Lost";
import Found from "./pages/Found";
import Admin from "./pages/Admin";
import { AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/found" element={<Found />} />

            <Route path="/found" element={<Found />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
