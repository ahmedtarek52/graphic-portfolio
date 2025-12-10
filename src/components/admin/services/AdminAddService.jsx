// src/components/admin/services/AdminAddService.jsx
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/config";
import FileUploader from "../../admin/ui/FileUploader";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export default function AdminAddService() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    description: "",
    price: "",
    revisions: 1,
    coverUrl: "",
    gallery: [],
  });
  const [saving, setSaving] = useState(false);

  const handleUploadCover = (url) => {
    setForm((p) => ({ ...p, coverUrl: url }));
  };

  const handleUploadGallery = (urls) => {
    setForm((p) => ({ ...p, gallery: urls }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      category: form.category,
      description: form.description,
      price: Number(form.price) || 0,
      revisions: Number(form.revisions) || 1,
      coverUrl: form.coverUrl,
      gallery: form.gallery,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "services"), payload);
    setSaving(false);
    navigate("/admin/services");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Service</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <Input label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <Input label="Slug (optional)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <Textarea label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <Input label="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <Input label="Revisions" type="number" value={form.revisions} onChange={(e) => setForm({ ...form, revisions: e.target.value })} />

        <div>
          <p className="mb-2">Cover Image</p>
          <FileUploader multiple={false} onUploadComplete={handleUploadCover} />
          {form.coverUrl && <img src={form.coverUrl} className="w-40 h-28 object-cover rounded mt-2" />}
        </div>

        <div>
          <p className="mb-2">Gallery (5 images)</p>
          <FileUploader multiple={true} onUploadComplete={handleUploadGallery} />
          <div className="flex gap-2 mt-2">
            {form.gallery?.map((g, i) => <img key={i} src={g} className="w-20 h-14 object-cover rounded" />)}
          </div>
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
