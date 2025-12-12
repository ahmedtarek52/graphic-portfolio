// src/utils/cloudinaryUpload.js
import axios from "axios";

/**
 * Upload a single File object to Cloudinary (unsigned preset).
 * returns { secure_url, public_id } or throws.
 */
export async function uploadToCloudinary(file) {
  // Check if required environment variables are set
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;
  
  if (!cloudName) {
    throw new Error("Cloudinary cloud name is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME in your .env file.");
  }
  
  if (!uploadPreset) {
    throw new Error("Cloudinary upload preset is not configured. Please set VITE_CLOUDINARY_PRESET in your .env file.");
  }

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", uploadPreset);

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const res = await axios.post(url, form, {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  });

  return res.data; // contains secure_url, public_id, etc.
}