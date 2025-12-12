// src/components/admin/layout/AdminSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", to: "/admin" },
  { label: "Services", to: "/admin/services" },
  { label: "Categories", to: "/admin/categories" },
  { label: "Tags", to: "/admin/tags" },
  { label: "Settings", to: "/admin/settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="p-4">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md mb-1 ${isActive ? "bg-purple-50 text-purple-600 font-semibold" : "text-gray-700"}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}