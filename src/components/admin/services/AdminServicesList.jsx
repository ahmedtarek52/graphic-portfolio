// src/components/admin/services/AdminServicesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import useCollection from "../../../hooks/useCollection";
import { db } from "../../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Button from "../../ui/Button";

export default function AdminServicesList() {
  const { docs: services, loading } = useCollection("services");

  const handleDelete = async (id) => {
    if (!confirm("Delete this service?")) return;
    await deleteDoc(doc(db, "services", id));
    // Consider also deleting images via a Cloud Function or server endpoint
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Services</h2>
        <Link to="/admin/services/add">
          <Button>New Service</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-lg shadow p-4 flex gap-4">
            <img src={s.coverUrl || s.cover || s.coverUrl} alt={s.title} className="w-28 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.description?.slice(0, 80)}</p>
              
              {/* Display tags */}
              {s.tags && s.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {s.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-3 flex gap-2">
                <Link to={`/admin/services/edit/${s.id}`}>
                  <Button variant="outline">Edit</Button>
                </Link>
                <Button variant="outline" onClick={() => handleDelete(s.id)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}