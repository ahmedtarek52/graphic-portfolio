import React, { useState } from "react";
import { addCategory } from "../../../firebase/categories";
import FileUploader from "../../admin/ui/FileUploader";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

export default function AdminAddCategory() {
  const [state, setState] = useState({
    name: "",
    slug: "",
    icon: "", // This can be an SVG string or URL
    bannerUrl: "", // Store the uploaded banner URL
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleIconUpload = (url) => {
    setState((prev) => ({ ...prev, icon: url || "" }));
  };

  const handleBannerUpload = (url) => {
    setState((prev) => ({ ...prev, bannerUrl: url || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Save category in Firebase
      await addCategory({
        name: state.name,
        slug: state.slug,
        icon: state.icon,
        banner: state.bannerUrl,
      });

      // Reset form
      setState({ name: "", slug: "", icon: "", bannerUrl: "" });
      alert("Category added successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
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
          {state.bannerUrl && (
            <img 
              src={state.bannerUrl} 
              alt="Banner preview" 
              className="mt-2 w-32 h-32 object-cover rounded" 
            />
          )}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Saving..." : "Add Category"}
        </Button>
      </form>
    </div>
  );
}