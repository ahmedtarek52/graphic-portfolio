import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const navItems = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/icons/logo.png" alt="Logo" loading="lazy" className="w-9 h-9" />
          <span className="font-semibold text-lg">YourCompany</span>
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 ml-6">
          {navItems.map((item)=>(
          <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? "text-indigo-600 font-medium " : "text-neutral-700 "}>{item.label}</NavLink>
          ))}
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
        <nav className="md:hidden  border-t shadow-sm flex flex-col px-6 py-4 gap-4">
          {navItems.map((item)=>(

          <NavLink 
            to={item.href}
            key={item.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-neutral-700 "} >
           {item.label}
          </NavLink>
          ))}

        </nav>
      )}
    </header>
  );
}
