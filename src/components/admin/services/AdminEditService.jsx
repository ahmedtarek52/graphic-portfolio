import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getService, updateService } from "../../../firebase/services";
import FileUploader from "../../admin/ui/FileUploader";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useCategories } from "../../../hooks/useCategories";
import { useTags } from "../../../hooks/useTags";

export default function AdminEditService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const categories = useCategories();
  const tags = useTags();
  
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    description: "",
    link:"",
    tags: [],
    coverUrl: "",
    gallery: [],
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch service on mount
  useEffect(() => {
    async function load() {
      try {
        const data = await getService(id);
        setForm({
          title: data.title || "",
          slug: data.slug || "",
          category: data.category || "",
          description: data.description || "",
          link: data.link || "",
          tags: data.tags || [],
          coverUrl: data.coverUrl || "",
          gallery: data.gallery || [],
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        alert("Failed to load service");
        navigate("/admin/services");
      }
    }
    load();
  }, [id, navigate]);

  const handleUploadCover = (url) => {
    setForm((p) => ({ ...p, coverUrl: url || "" }));
  };

  const handleUploadGallery = (urls) => {
    // Append new images to existing gallery instead of replacing
    setForm((p) => ({ ...p, gallery: [...p.gallery, ...(Array.isArray(urls) ? urls : [urls])] }));
  };

  const handleRemoveGalleryImage = (index) => {
    setForm((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  const handleTagChange = (tagName) => {
    setForm(prev => {
      if (prev.tags.includes(tagName)) {
        return {
          ...prev,
          tags: prev.tags.filter(t => t !== tagName)
        };
      } else {
        return {
          ...prev,
          tags: [...prev.tags, tagName]
        };
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    // Validate required fields
    if (!form.title || !form.category || !form.description) {
      alert("Please fill in all required fields");
      setSaving(false);
      return;
    }
    
    const payload = {
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      category: form.category,
      description: form.description,
      link: form.link || "",
      tags: form.tags || [],
      coverUrl: form.coverUrl || "",
      gallery: form.gallery || [],
    };
    
    try {
      await updateService(id, payload);
      navigate("/admin/services");
    } catch (error) {
      console.error("Error updating service: ", error);
      alert("Error updating service. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <Input 
          label="Title *" 
          name="title"
          value={form.title} 
          onChange={handleChange} 
          required
        />
        <Input 
          label="Slug (optional)" 
          name="slug"
          value={form.slug} 
          onChange={handleChange} 
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <Textarea 
          label="Description *" 
          name="description"
          value={form.description} 
          onChange={handleChange} 
          required
        />
        <Input 
          label="Link (optional)" 
          type="string" 
          name="link"
          value={form.link} 
          onChange={handleChange} 
        />
        
        {/* Tags Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <label key={tag.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.tags.includes(tag.name)}
                  onChange={() => handleTagChange(tag.name)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                  #{tag.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2">Cover Image</p>
          <FileUploader multiple={false} onUploadComplete={handleUploadCover} />
          {form.coverUrl && <img src={form.coverUrl} className="w-40 h-28 object-cover rounded mt-2" />}
        </div>

        <div>
          <p className="mb-2">Gallery Images</p>
          <FileUploader multiple={true} onUploadComplete={handleUploadGallery} />
          <div className="flex gap-2 mt-2 flex-wrap">
            {form.gallery?.map((g, i) => (
              <div key={i} className="relative">
                <img src={g} className="w-20 h-14 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleRemoveGalleryImage(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {form.gallery && form.gallery.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              {form.gallery.length} image(s) uploaded
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <Button type="submit" className="bg-purple-600 text-white" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
          <Button 
            type="button" 
            onClick={() => navigate("/admin/services")}
            className="bg-gray-500 text-white"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}