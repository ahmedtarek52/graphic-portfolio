// src/components/admin/layout/AdminProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../../context/AdminAuthContext";

export default function AdminProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAdminAuth();

  // debug: log auth state to browser console to help trace why Dashboard isn't rendering
  // Remove or restrict this in production.
  // eslint-disable-next-line no-console
  // console.log("AdminProtectedRoute auth:", { user, isAdmin, loading });

  if (loading) return <div className="p-6">Checking access...</div>;

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) return <div className="p-6 text-red-500">Access denied</div>;

  return children;
}
