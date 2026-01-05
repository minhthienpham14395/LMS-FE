import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";

import Login from "./views/Login";
import Register from "./views/Register";
import Learn from "./views/Learn";
import ForgotPassword from "./views/ForgotPassword";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("brightkids_isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/"
        element={
          <Navigate
            to="/login
      "
            replace
          />
        }
      />
    </Routes>
  );
}
