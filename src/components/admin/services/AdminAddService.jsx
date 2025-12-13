// src/components/admin/services/AdminAddService.jsx
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import FileUploader from "../../admin/ui/FileUploader";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../hooks/useCategories";
import { useTags } from "../../../hooks/useTags";

export default function AdminAddService() {
  const navigate = useNavigate();
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
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
  const [saving, setSaving] = useState(false);

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
      createdAt: serverTimestamp(),
    };
    
    try {
      await addDoc(collection(db, "services"), payload);
      setSaving(false);
      navigate("/admin/services");
    } catch (error) {
      console.error("Error adding service: ", error);
      alert("Error saving service. Please try again.");
      setSaving(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <Input 
          label="Title *" 
          value={form.title} 
          onChange={(e) => setForm({ ...form, title: e.target.value })} 
          required
        />
        <Input 
          label="Slug (optional)" 
          value={form.slug} 
          onChange={(e) => setForm({ ...form, slug: e.target.value })} 
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
          {categoriesLoading ? (
            <p>Loading categories...</p>
          ) : categoriesError ? (
            <p className="text-red-500">Error loading categories: {categoriesError}</p>
          ) : (
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <Textarea 
          label="Description *" 
          value={form.description} 
          onChange={(e) => setForm({ ...form, description: e.target.value })} 
          required
        />
        <Input 
          label="Link (optional)" 
          type="string" 
          value={form.link} 
          onChange={(e) => setForm({ ...form, link: e.target.value })} 
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
          {form.coverUrl && <img src={form.coverUrl} alt="Service cover" className="w-40 h-28 object-cover rounded mt-2" />}
        </div>

        <div>
          <p className="mb-2">Gallery Images</p>
          <FileUploader multiple={true} onUploadComplete={handleUploadGallery} />
          <div className="flex gap-2 mt-2 flex-wrap">
            {form.gallery?.map((g, i) => (
              <div key={i} className="relative">
                <img src={g} alt={`Gallery image ${i + 1}`} className="w-20 h-14 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleRemoveGalleryImage(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  aria-label={`Remove image ${i + 1}`}
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

        <div>
          <Button type="submit" className="bg-purple-600 text-white" disabled={saving}>
            {saving ? "Saving..." : "Create Service"}
          </Button>
        </div>
      </form>
    </div>
  );
}