// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminProtectedRoute from "../components/admin/layout/AdminProtectedRoute";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminServicesList from "../components/admin/services/AdminServicesList";
import AdminAddService from "../components/admin/services/AdminAddService";
import AdminEditService from "../components/admin/services/AdminEditService";
import Login from "../components/admin/Login"; // we'll create a lightweight Login next
import AdminCategoriesList from "../components/admin/categories/AdminCategoriesList";
import AdminAddCategory from "../components/admin/categories/AdminAddCategory";
import AdminSettings from "../components/admin/settings/AdminSettings";
import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminEditCategory from "../components/admin/categories/AdminEditCategory";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* public admin routes */}
      <Route path="login" element={<Login />} />

      {/* protected admin area mounted at /admin/* — AdminLayout contains Navbar, Sidebar and an Outlet */}
      <Route
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="services" element={<AdminServicesList />} />
        <Route path="services/add" element={<AdminAddService />} />
        <Route path="services/edit/:id" element={<AdminEditService />} />
        <Route path="categories" element={<AdminCategoriesList />} />
        <Route path="categories/add" element={<AdminAddCategory />} />
        <Route path="categories/edit/:id" element={<AdminEditCategory />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}