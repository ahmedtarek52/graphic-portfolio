// src/components/admin/ui/Base64FileUploader.jsx
import React, { useState } from "react";
import { fileToCompressedBase64 } from "../../../utils/fileToBase64";

export default function Base64FileUploader({ multiple = false, onUploadComplete, maxSizeMB = 1 }) {
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);
    try {
      // Check file sizes
      for (const f of files) {
        // Check if file is an image
        if (!f.type.startsWith('image/')) {
          throw new Error('Please select only image files');
        }
        
        // Check file size (in bytes)
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (f.size > maxSizeBytes) {
          throw new Error(`File "${f.name}" is too large. Maximum size is ${maxSizeMB}MB.`);
        }
      }

      const uploaded = [];
      for (const f of files) {
        // Convert file to compressed base64
        const base64 = await fileToCompressedBase64(f, 0.7, 800, 600);
        uploaded.push(base64);
      }
      onUploadComplete && onUploadComplete(multiple ? uploaded : uploaded[0]);
    } catch (err) {
      console.error("upload error", err);
      alert(`Upload failed: ${err.message || "Unknown error"}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-purple-600 text-white">
        {uploading ? "Processing..." : "Choose Image"}
        <input type="file" multiple={multiple} onChange={handleFiles} className="hidden" accept="image/*" />
      </label>
      <div className="text-sm text-gray-500">
        Max size: {maxSizeMB}MB
      </div>
    </div>
  );
}