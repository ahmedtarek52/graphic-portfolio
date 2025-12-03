import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/icons/logo.png" alt="Logo" className="w-9 h-9" />
          <span className="font-semibold text-lg">YourCompany</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 ml-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}>Home</NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}>Categories</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}>Contact</NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-neutral-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm flex flex-col px-6 py-4 gap-4">
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}
          >
            Home
          </NavLink>

          <NavLink 
            to="/categories" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}
          >
            Categories
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}
          >
            About
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700"}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}
