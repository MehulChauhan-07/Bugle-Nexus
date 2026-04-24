import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const Navbar = () => {


  return (
    <nav className="sticky top-0 z-[100] bg-[#111111] px-8 font-dm-sans">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="text-[22px] text-white font-medium flex items-center gap-2 tracking-[0.02em]">
          <img src="https://bugle.in/wp-content/uploads/2023/12/LOGO.avif" alt="Logo" className="h-[40px] w-auto object-contain" />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          <li>
            <Link to="/categories" className="text-[14px] font-normal text-[#cccccc] hover:text-white transition-colors">Courses</Link>
          </li>
          <li>
            <Link to="#" className="text-[14px] font-normal text-[#cccccc] hover:text-white transition-colors">My Learning</Link>
          </li>
          <li>
            <Link to="#" className="text-[14px] font-normal text-[#cccccc] hover:text-white transition-colors">About</Link>
          </li>
          <li>
            <Link to="#" className="text-[14px] font-normal text-[#cccccc] hover:text-white transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link to="/login" className="text-[14px] px-5 py-2.5 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/10 transition-all">
            Log in
          </Link>
          <Link to="/auth" className="text-[14px] px-5 py-2.5 rounded-lg bg-white text-[#111111] font-medium hover:opacity-85 transition-opacity">
            Get Started &rarr;
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
