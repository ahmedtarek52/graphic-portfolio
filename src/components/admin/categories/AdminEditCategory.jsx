import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategory, updateCategory } from "../../../firebase/categories";
import FileUploader from "../../admin/ui/FileUploader";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

export default function AdminEditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({ 
    name: "", 
    slug: "", 
    icon: "", 
    banner: "" // This will hold the current banner URL
  });
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const cat = await getCategory(id);
        setState({ 
          name: cat.name || "", 
          slug: cat.slug || "", 
          icon: cat.icon || "", 
          banner: cat.banner || ""
        });
      } catch (err) {
        console.error(err);
        alert("Failed to load category");
        navigate("/admin/categories");
      } finally {
        setInitialLoading(false);
      }
    };
    fetchCategory();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleIconUpload = (url) => {
    setState((prev) => ({ ...prev, icon: url || "" }));
  };

  const handleBannerUpload = (url) => {
    setState((prev) => ({ ...prev, banner: url || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCategory(id, { 
        name: state.name,
        slug: state.slug,
        icon: state.icon,
        banner: state.banner
      });
      alert("Category updated!");
      navigate("/admin/categories");
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="Name" 
          name="name" 
          value={state.name} 
          onChange={handleChange} 
          required 
        />
        <Input 
          label="Slug" 
          name="slug" 
          value={state.slug} 
          onChange={handleChange} 
          required 
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Icon (SVG or URL)
          </label>
          <Input
            name="icon"
            value={state.icon}
            onChange={handleChange}
            placeholder="Paste SVG code or image URL"
            className="mb-2"
          />
          <div className="text-sm text-gray-500 mb-2">Or upload an image:</div>
          <FileUploader 
            multiple={false} 
            onUploadComplete={handleIconUpload} 
          />
          {state.icon && (
            <img 
              src={state.icon} 
              alt="Icon preview" 
              className="mt-2 w-16 h-16 object-contain rounded" 
            />
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Banner Image
          </label>
          <FileUploader 
            multiple={false} 
            onUploadComplete={handleBannerUpload} 
          />
          {state.banner && (
            <img 
              src={state.banner} 
              alt="Banner" 
              className="mt-2 w-48 h-48 object-cover rounded" 
            />
          )}
        </div>
        
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Updating..." : "Update Category"}
        </Button>
      </form>
    </div>
  );
}