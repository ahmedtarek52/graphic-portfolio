// src/components/admin/layout/AdminNavbar.jsx
import React from "react";
import { useAdminAuth } from "../../../context/AdminAuthContext";
import Button from "../../ui/Button";

export default function AdminNavbar() {
  const { user, logout } = useAdminAuth();

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">Admin</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-700 hidden sm:block">{user?.email}</div>
          <Button variant="outline" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
