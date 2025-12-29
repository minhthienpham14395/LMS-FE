import { Routes, Route, Navigate } from "react-router-dom";
import LandingEdu from "./views/LandingEdu";
import DashboardEdu from "./views/DashboardEdu";
import Test from "./views/Test";
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
      <Route path="/dashboard" element={<DashboardEdu />} />
      <Route path="/landing" element={<LandingEdu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/test" element={<Test />} />
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
