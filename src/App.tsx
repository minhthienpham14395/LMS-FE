import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import Learn from "./views/Learn";
import ForgotPassword from "./views/ForgotPassword";
import SendEmail from "./testmail/SendEmail";


// Component bảo vệ route
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem("brightkids_userEmail") !== null;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  console.log(children);
  return children;
};

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/send" element={<SendEmail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/landing"
        element={
          // <ProtectedRoute>
          <Landing />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/learn"
        element={
          <ProtectedRoute>
            <Learn />
          </ProtectedRoute>
        }
      />

      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
