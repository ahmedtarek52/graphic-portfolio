// src/components/admin/layout/AdminProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../../context/AdminAuthContext";

export default function AdminProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAdminAuth();

  if (loading) return <div className="p-6">Checking access...</div>;

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) return <div className="p-6 text-red-500">Access denied</div>;

  return children;
}
