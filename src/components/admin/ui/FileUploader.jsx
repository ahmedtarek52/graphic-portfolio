// src/components/admin/ui/FileUploader.jsx
import React, { useState } from "react";
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload";

export default function FileUploader({ multiple = false, onUploadComplete }) {
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);
    try {
      const uploaded = [];
      for (const f of files) {
        const res = await uploadToCloudinary(f);
        uploaded.push(res.secure_url || res.secureUrl || res.url);
      }
      onUploadComplete && onUploadComplete(multiple ? uploaded : uploaded[0]);
    } catch (err) {
      console.error("upload error", err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-purple-600 text-white">
        {uploading ? "Uploading..." : "Choose Image"}
        <input type="file" multiple={multiple} onChange={handleFiles} className="hidden" />
      </label>
    </div>
  );
}
