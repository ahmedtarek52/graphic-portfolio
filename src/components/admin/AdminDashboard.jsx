// src/components/admin/AdminDashboard.jsx
import React from "react";
import useCollection from "../../hooks/useCollection";

export default function AdminDashboard() {
  const { docs: services, loading: sLoading } = useCollection("services");
  const { docs: categories, loading: cLoading } = useCollection("categories");
  const { docs: tags, loading: tLoading } = useCollection("tags");

  if (sLoading || cLoading || tLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">Services</p>
          <p className="text-3xl font-bold">{services.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">Categories</p>
          <p className="text-3xl font-bold">{categories.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">Tags</p>
          <p className="text-3xl font-bold">{tags.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <p className="text-sm text-gray-500">Admins</p>
          <p className="text-3xl font-bold">1</p>
        </div>
      </div>
    </div>
  );
}