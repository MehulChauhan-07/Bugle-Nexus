import React from "react";
// import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import BuyCredit from "./pages/BuyCredit.jsx";
import Login from "./pages/Login.jsx";
import RoleSelection from "./pages/RoleSelection.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import LearnerForm from "./pages/LearnerForm.jsx";
import Categories from "./pages/Categories.jsx";
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/pricing" element={<BuyCredit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/sign-up/employee" element={<EmployeeForm />} />
        <Route path="/sign-up/learner" element={<LearnerForm />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
