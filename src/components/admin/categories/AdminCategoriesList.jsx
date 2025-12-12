import React, { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../../firebase/categories";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const AdminCategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await getCategories();
    setCategories(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    await deleteCategory(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="p-6">Loading categories...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <Link to="/admin/categories/add">
          <Button>Add Category</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 bg-white shadow rounded border flex justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.slug}</p>
            </div>

            <div className="flex gap-3 items-center">
              <Link to={`/admin/categories/edit/${cat.id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button variant="outline" onClick={() => handleDelete(cat.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategoriesList;
