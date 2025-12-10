// src/utils/cloudinaryUpload.js
import axios from "axios";

/**
 * Upload a single File object to Cloudinary (unsigned preset).
 * returns { secure_url, public_id } or throws.
 */
export async function uploadToCloudinary(file) {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

  const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

  const res = await axios.post(url, form, {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  });

  return res.data; // contains secure_url, public_id, etc.
}
