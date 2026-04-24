import React from "react";
// import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Result from "./pages/Result.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./pages/Auth.jsx";
import RoleSelection from "./pages/RoleSelection.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import LearnerForm from "./pages/LearnerForm.jsx";
import Categories from "./pages/Categories.jsx";

// New signup flow pages
import SignupRole from "./pages/signup/SignupRole.jsx";
import LearnerBasic from "./pages/signup/learner/LearnerBasic.jsx";
import LearnerProfile from "./pages/signup/learner/LearnerProfile.jsx";
import OrgCompany from "./pages/signup/org/OrgCompany.jsx";
import OrgAdmin from "./pages/signup/org/OrgAdmin.jsx";
import OrgSetup from "./pages/signup/org/OrgSetup.jsx";

// Dashboard pages
import LearnerDashboard from "./pages/dashboard/LearnerDashboard.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";

import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Routes that have their own full-page layout (no shared Navbar/Footer)
const STANDALONE_ROUTES = [
  "/auth",
  "/signup/role",
  "/signup/learner/basic",
  "/signup/learner/profile",
  "/signup/org/company",
  "/signup/org/admin",
  "/signup/org/setup",
  "/dashboard",
  "/admin/dashboard",
];

function App() {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname);

  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="bottom-right" />
      {!isStandalone && <Navbar />}
      <Routes>
        {/* Main site */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* Auth */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />

        {/* Legacy signup routes (kept for backward compatibility) */}
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/sign-up/employee" element={<EmployeeForm />} />
        <Route path="/sign-up/learner" element={<LearnerForm />} />

        {/* New signup flow */}
        <Route path="/signup/role" element={<SignupRole />} />
        <Route path="/signup/learner/basic" element={<LearnerBasic />} />
        <Route path="/signup/learner/profile" element={<LearnerProfile />} />
        <Route path="/signup/org/company" element={<OrgCompany />} />
        <Route path="/signup/org/admin" element={<OrgAdmin />} />
        <Route path="/signup/org/setup" element={<OrgSetup />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<LearnerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isStandalone && <Footer />}
    </div>
  );
}

export default App;
