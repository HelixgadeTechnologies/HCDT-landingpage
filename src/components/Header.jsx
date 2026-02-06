import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const link = process.env.NEXT_PUBLIC_BASE_URL;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md lg:shadow-none w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4">
          {/* Logo and Desktop Navigation */}
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl lg:text-3xl font-bold relative">
                <span className="leading-2">I-HCDT</span>
                <span className="text-xs block text-[#003B99] absolute -bottom-2 tracking-widest">Monitor</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <a
                href="https://hcdt-7a5ba199a866.herokuapp.com/"
                className="px-3 py-2 text-base font-medium text-gray-900 relative group hover:cursor-pointer"
              >
                Dashboard
              </a>
              <Link
                href="/contact"
                className="px-3 py-2 text-base font-medium text-gray-900"
              >
                Contact
              </Link>
            </ul>

            {/* Login and Sign Up Buttons */}
            <div className="hidden md:flex md:items-center">
              <a href={`https://hcdt-7a5ba199a866.herokuapp.com/auth/1`}>
                <button className="px-4 py-2 text-sm font-medium text-blue-2 mr-2">
                  Log In
                </button>
              </a>
              <a href={`https://hcdt-7a5ba199a866.herokuapp.com/auth/2`}>
                <button className="pl-6 pr-3 py-2.5 text-base font-medium text-white bg-blue-1 rounded-lg flex items-center gap-x-4">
                  Sign Up Free
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.586 10.6564L11.636 6.70643C11.4538 6.51783 11.353 6.26523 11.3553 6.00303C11.3576 5.74083 11.4628 5.49002 11.6482 5.30461C11.8336 5.1192 12.0844 5.01403 12.3466 5.01176C12.6088 5.00948 12.8614 5.11027 13.05 5.29243L18.707 10.9494C18.8002 11.0421 18.8741 11.1522 18.9246 11.2736C18.9751 11.3949 19.001 11.525 19.001 11.6564C19.001 11.7878 18.9751 11.918 18.9246 12.0393C18.8741 12.1606 18.8002 12.2708 18.707 12.3634L13.05 18.0204C12.9578 18.1159 12.8474 18.1921 12.7254 18.2445C12.6034 18.2969 12.4722 18.3245 12.3394 18.3257C12.2066 18.3268 12.0749 18.3015 11.952 18.2513C11.8291 18.201 11.7175 18.1267 11.6236 18.0328C11.5297 17.9389 11.4555 17.8273 11.4052 17.7044C11.3549 17.5815 11.3296 17.4498 11.3307 17.317C11.3319 17.1842 11.3595 17.053 11.4119 16.931C11.4643 16.809 11.5405 16.6987 11.636 16.6064L15.586 12.6564H6C5.73478 12.6564 5.48043 12.5511 5.29289 12.3635C5.10536 12.176 5 11.9216 5 11.6564C5 11.3912 5.10536 11.1369 5.29289 10.9493C5.48043 10.7618 5.73478 10.6564 6 10.6564H15.586Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className=" focus:border-none inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="https://hcdt-7a5ba199a866.herokuapp.com/"
              className="px-3 py-2 text-base font-medium text-gray-900 relative group"
            >
              Dashboard
            </a>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2 ">
              <a href="https://hcdt-7a5ba199a866.herokuapp.com/auth/1">
                <button className="px-4 py-2 text-sm font-medium text-blue-2 ">
                  Log In
                </button>
              </a>
              <a href="https://hcdt-7a5ba199a866.herokuapp.com/auth/2">
                <button className="pl-6 pr-3 py-2.5 text-base font-medium text-white bg-blue-1 rounded-lg flex items-center gap-x-4">
                  Sign Up Free
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.586 10.6564L11.636 6.70643C11.4538 6.51783 11.353 6.26523 11.3553 6.00303C11.3576 5.74083 11.4628 5.49002 11.6482 5.30461C11.8336 5.1192 12.0844 5.01403 12.3466 5.01176C12.6088 5.00948 12.8614 5.11027 13.05 5.29243L18.707 10.9494C18.8002 11.0421 18.8741 11.1522 18.9246 11.2736C18.9751 11.3949 19.001 11.525 19.001 11.6564C19.001 11.7878 18.9751 11.918 18.9246 12.0393C18.8741 12.1606 18.8002 12.2708 18.707 12.3634L13.05 18.0204C12.9578 18.1159 12.8474 18.1921 12.7254 18.2445C12.6034 18.2969 12.4722 18.3245 12.3394 18.3257C12.2066 18.3268 12.0749 18.3015 11.952 18.2513C11.8291 18.201 11.7175 18.1267 11.6236 18.0328C11.5297 17.9389 11.4555 17.8273 11.4052 17.7044C11.3549 17.5815 11.3296 17.4498 11.3307 17.317C11.3319 17.1842 11.3595 17.053 11.4119 16.931C11.4643 16.809 11.5405 16.6987 11.636 16.6064L15.586 12.6564H6C5.73478 12.6564 5.48043 12.5511 5.29289 12.3635C5.10536 12.176 5 11.9216 5 11.6564C5 11.3912 5.10536 11.1369 5.29289 10.9493C5.48043 10.7618 5.73478 10.6564 6 10.6564H15.586Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
