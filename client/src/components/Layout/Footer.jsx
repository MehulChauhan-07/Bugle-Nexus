import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-8 font-dm-sans">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-8 border-t border-white/10 pt-8">
        <span className="text-[14px] text-white/50">© 2026 BugleNexus. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-[14px] text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-[14px] text-white/70 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-[14px] text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;