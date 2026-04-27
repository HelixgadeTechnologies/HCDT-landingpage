import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => router.pathname === path;

  const getLinkClasses = (path) => 
    isActive(path) 
      ? "text-blue-1 font-bold text-lg lg:text-xl transition-colors" 
      : "text-gray-600 hover:text-blue-1 font-bold text-lg lg:text-xl transition-colors";

  const getMobileLinkClasses = (path) =>
    isActive(path)
      ? "block text-blue-1 font-bold text-lg"
      : "block text-gray-600 font-bold text-lg";

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-1 py-2 lg:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-y-4">
          <div className="flex-1 flex justify-center lg:justify-start">
            <h2 className="text-white text-[10px] lg:text-sm font-bold tracking-wider text-center lg:text-left">
              INDEPENDENT HOST COMMUNITY DEVELOPMENT TRUST MONITORING AND EVALUATION PLATFORM
            </h2>
          </div>
          
          <div className="flex items-center gap-x-3">
            <a href={`https://hcdt-7a5ba199a866.herokuapp.com/auth/1`}>
              <button className="px-6 py-1.5 lg:py-2 text-sm font-bold text-white bg-white/20 hover:bg-white/30 rounded transition-all">
                Login
              </button>
            </a>
            <a href={`https://hcdt-7a5ba199a866.herokuapp.com/auth/2`}>
              <button className="px-6 py-1.5 lg:py-2 text-sm font-bold text-white bg-blue-2 hover:bg-blue-600 rounded transition-all">
                Sign Up Free
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#E5E7EB] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-black text-black leading-none">I-HCDT</span>
                <span className="text-xs lg:text-sm font-bold text-[#003B99] tracking-[0.2em] uppercase">Monitor</span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center space-x-8">
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              <a
                href="https://hcdt-7a5ba199a866.herokuapp.com/"
                className="text-gray-600 hover:text-blue-1 font-bold text-lg lg:text-xl transition-colors"
              >
                Aggregated Dashboard
              </a>
              <a
                href="https://hcdt-7a5ba199a866.herokuapp.com/"
                className="text-gray-600 hover:text-blue-1 font-bold text-lg lg:text-xl transition-colors"
              >
                Trust Dashboard
              </a>
            </ul>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className={getMobileLinkClasses("/")}>
                Home
              </Link>
              <Link href="/about" className={getMobileLinkClasses("/about")}>
                About
              </Link>
              <a
                href="https://hcdt-7a5ba199a866.herokuapp.com/"
                className="block text-gray-600 font-bold text-lg"
              >
                Aggregated Dashboard
              </a>
              <a
                href="https://hcdt-7a5ba199a866.herokuapp.com/"
                className="block text-gray-600 font-bold text-lg"
              >
                Trust Dashboard
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>

  );
};

export default Header;
